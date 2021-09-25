import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './Dashboard.css';
import Dashboard from './Dashboard';

const DashboardRoutes = ({ setIsAuthenticated }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/dashboard" >
                    <Dashboard setIsAuthenticated={setIsAuthenticated} />
                </Route>
                <Redirect to="/dashboard" />
            </Switch>
        </Router>
    );
}

export default DashboardRoutes;