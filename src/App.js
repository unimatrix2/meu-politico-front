import Home from './components/Home/Home';
import { useState, useEffect } from 'react';
import NavigationBar from './components/Navbar/Navbar';
import About from './components/About/About';
import { Switch, Route, Redirect } from 'react-router-dom';
import { get, remove } from './utils/localStorage.utils';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isAuthed, setIsAuthed] = useState(() => {
        const token = get();
        if (token) { return true }
        return false;
    });
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        const token = get();
        if (token) {
            axios.get("http://localhost:5000/api/usuario/token", {
                headers: { Authorization: token.token }
            })
            .then(data => setCurrentUser({
                firstName: data.data.firstName,
                lastName: data.data.lastName,
                email: data.data.email,
                cpf: data.data.cpf,
                imageURL: data.data.imageURL,
                role: data.data.role,
            }))
            .catch(err => {
                remove();
                setIsAuthed(false);
            })
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
                <Route exact path="/" render={() => <Home showSignup={showSignup} setShowSignup={setShowSignup} />} />
                <Route exact path="/sobre" render={() => <About isFaq={false} />} />
                <Route exact path="/faq" render={() => <About isFaq={true} />} />
            </Switch>
        </div>
    );
}

export default App;
