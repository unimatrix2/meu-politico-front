import Home from './components/Home/Home';
import { useState } from 'react';
import NavigationBar from './components/Navbar/Navbar';
import About from './components/About/About';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div className="App" style={{backgroundColor: "var(--honeydew)"}}>
            <NavigationBar
            showSignup={showSignup}
            setShowSignup={setShowSignup}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
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
