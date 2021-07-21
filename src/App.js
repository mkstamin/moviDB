import { Route, Switch } from 'react-router-dom';
import Details from './page/Details/Details';
import Home from './page/Home/Home';

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
