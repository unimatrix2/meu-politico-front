import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import 'bulma/css/bulma.css';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre" render={() => <About isFaq={false} />} />
                <Route exact path="/faq" render={() => <About isFaq={true} />} />
            </Switch>
        </div>
    );
}

export default App;
