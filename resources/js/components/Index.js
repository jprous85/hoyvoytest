import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./Account/Login";
import Home from "./Home/Home";
import {Provider} from 'react-redux';
import store from "../redux/store";
import {LOGIN, API_LOGIN} from '../utils/Constants';

function Index() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={[LOGIN, API_LOGIN]}>
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
