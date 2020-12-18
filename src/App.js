import Home from './components/Home/Home';
import { useState, useEffect } from 'react';
import NavigationBar from './components/Navbar/Navbar';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import PoliticoTable from './components/Tables/PoliticoTable/Politicotable';
import NoticiaTable from './components/Tables/NoticiaTable/NoticiaTable';
import Noticia from './components/Detail Views/Noticia';
import Politico from './components/Detail Views/Politico';
import SearchResults from './components/SearchResults/SearchResults';
import { Switch, Route, Redirect } from 'react-router-dom';
import { get, remove } from './utils/localStorage.utils';
import api from './services/api.service';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [currentUser, setCurrentUser] = useState({})
    const [searchValue, setSearchValue] = useState('');
    const [currentSearchMethod, setCurrentSearchMethod] = useState('Selecione Busca');
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isAuthed, setIsAuthed] = useState(get() ? true : false);
    const [showSearchBar, setShowSearchBar] = useState(true);
    useEffect(() => {
        if (isAuthed) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/usuario/token`)
                .then(data => setCurrentUser(data.data))
                .catch(() => { remove(); setIsAuthed(false); })
        }
    }, [isAuthed])
    return (
        <div className="App" style={{ backgroundColor: "var(--honeydew)" }}>
                <NavigationBar
                    authState={isAuthed}
                    setAuthState={setIsAuthed}
                    showSignup={showSignup}
                    setShowSignup={setShowSignup}
                    showLogin={showLogin}
                    setShowLogin={setShowLogin}
                    currentUser={currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : false}
                    search={searchValue}
                    setSearch={setSearchValue}
                    showBar={showSearchBar}
                    setShowBar={setShowSearchBar}
                    currentSearchMethod={currentSearchMethod}
                    setCurrentSearchMethod={setCurrentSearchMethod}
                />
            <Switch>
                <Route exact path="/" render={ (props) => <Home showSignup={showSignup} setShowSignup={setShowSignup} authState={isAuthed} /> } />
                <Route exact path="/busca" render={(props) => {
                    setShowSearchBar(false);
                    return <SearchResults
                        search={searchValue}
                        setSearch={setSearchValue}
                        currentSearchMethod={currentSearchMethod}
                        setCurrentSearchMethod={setCurrentSearchMethod}
                    />
                }} />
                <Route exact path="/sobre" render={() => <About isFaq={false} />} />
                <Route exact path="/faq" render={() => <About isFaq={true} />} />
                <Route exact path="/noticia/:id" render={() => <Noticia authed={isAuthed} />} />
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
