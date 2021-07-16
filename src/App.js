import { Route, Switch } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/details/:slug">
                    <Details />
                </Route>
            </Switch>
        </>
    );
}

export default App;
