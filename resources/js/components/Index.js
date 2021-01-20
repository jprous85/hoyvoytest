import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from "./Account/Login";
import Home from "./Home/Home";

function Index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={["/login", "/api/login"]}>
                    <Login />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
