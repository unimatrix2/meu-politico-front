import Home from './components/Home/Home';
import { useState, useEffect } from 'react';
import NavigationBar from './components/Navbar/Navbar';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import PoliticoTable from './components/Tables/PoliticoTable/Politicotable';
import NoticiaTable from './components/Tables/NoticiaTable/NoticiaTable';
import Noticia from './components/Detail Views/Noticia';
import Politico from './components/Detail Views/Politico';
import { Switch, Route, Redirect } from 'react-router-dom';
import { get, remove } from './utils/localStorage.utils';
import api from './services/api.service';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isAuthed, setIsAuthed] = useState(get() ? true : false);
    const [requested, setRequested] = useState(false)
    const [currentUser, setCurrentUser] = useState(isAuthed && !requested ? (() => {
        api.get(`${process.env.REACT_APP_API_BASE_URL}/usuario/token`)
                .then(data => {
                    setCurrentUser(data.data);
                })
                .catch(() => { setRequested(true); return false })
    }) : () => { setRequested(true); return false });
    useEffect(() => {
        if (!currentUser && requested && isAuthed) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/usuario/token`)
            .then(data => setCurrentUser(data.data))
            .catch(() => { setIsAuthed(false); remove(); });
        }
    }, [isAuthed, currentUser, requested])
    return (
        <div className="App" style={{backgroundColor: "var(--honeydew)"}}>
            <NavigationBar
            authState={isAuthed}
            setAuthState={setIsAuthed}
            showSignup={showSignup}
            setShowSignup={setShowSignup}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            currentUser={currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : false}
            />

            <Switch>
                <Route exact path="/" render={() => <Home showSignup={showSignup} setShowSignup={setShowSignup} authState={isAuthed} />} />
                <Route exact path="/sobre" render={() => <About isFaq={false} />} />
                <Route exact path="/faq" render={() => <About isFaq={true} />} />
                <Route exact path="/noticia/:id" component={() => <Noticia authed={isAuthed} />} />
                <Route exact path="/politico/:id" component={() => <Politico authed={isAuthed} />} />
                {isAuthed ? <Route exact path="/conta" render={() => <Dashboard userData={currentUser} />} /> : <Redirect to="/" />}
                {isAuthed ? <Route path="/politicos" component={PoliticoTable} /> : <Redirect to="/" /> }
                {isAuthed ? <Route path="/noticias" component={NoticiaTable} /> : <Redirect to="/" />}
                <Route exact path="/divulgacandcontas.tse.jus.br" component={() => window.location = "https://divulgacandcontas.tse.jus.br"} />
            </Switch>
        </div>
    );
}

export default App;
