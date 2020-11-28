import Home from './components/Home/Home';
import NavigationBar from './components/Navbar/Navbar';
import About from './components/About/About';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <NavigationBar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre" render={() => <About isFaq={false} />} />
                <Route exact path="/faq" render={() => <About isFaq={true} />} />
            </Switch>
        </div>
    );
}

export default App;
