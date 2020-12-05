import Home from './components/Home/Home';
import { useState, useEffect } from 'react';
import NavigationBar from './components/Navbar/Navbar';
import About from './components/About/About';
import { Switch, Route, Redirect } from 'react-router-dom';
import { get, remove } from './utils/localStorage.utils';
import api from './services/api.service'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isAuthed, setIsAuthed] = useState(get() ? true : false);
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        if (isAuthed) {
            api.get(`${process.env.REACT_APP_API_BASE_URL}/usuario/token`)
                .then(data => setCurrentUser({
                        firstName: data.data.firstName,
                        lastName: data.data.lastName,
                        email: data.data.email,
                        cpf: data.data.cpf,
                        imageURL: data.data.imageURL,
                        role: data.data.role,
                    })
                )
                .catch(() => setIsAuthed(false));
        }
    }, [isAuthed])
    return (
        <div className="App" style={{backgroundColor: "var(--honeydew)"}}>
            <NavigationBar
            authState={isAuthed}
            setAuthState={setIsAuthed}
            showSignup={showSignup}
            setShowSignup={setShowSignup}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            currentUser={`${currentUser.firstName} ${currentUser.lastName}`}
            />

            <Switch>
                <Route exact path="/" render={() => <Home showSignup={showSignup} setShowSignup={setShowSignup} authState={isAuthed} />} />
                <Route exact path="/sobre" render={() => <About isFaq={false} />} />
                <Route exact path="/faq" render={() => <About isFaq={true} />} />
            </Switch>
        </div>
    );
}

export default App;
