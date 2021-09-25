import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login/Login";
import Signup from './Signup/Signup';

const AuthRoutes = ({setIsAuthenticated}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Signup} />
                <Route path="/login"  >
                    <Login setIsAuthenticated={setIsAuthenticated} />
                </Route>
                <Redirect to="/login" />
            </Switch>
        </Router>
    );
}

export default AuthRoutes;