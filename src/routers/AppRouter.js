import React from 'react';
import {Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../compnents/LoginPage';
import DashboardPage from '../compnents/DashboardPage';
import NotFountPage from '../compnents/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFountPage} />
            </Switch>        
        </div>
    </Router>
);

export default AppRouter;