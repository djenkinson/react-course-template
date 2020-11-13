import React from 'react';
import {Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../compnents/LoginPage';
import ExpenseDashboardPage from '../compnents/ExpenseDashboardPage';
import AddExpensePage from '../compnents/AddExpensePage';
import EditExpensePage from '../compnents/EditExpensePage';
import HelpPage from '../compnents/HelpPage';
import NotFountPage from '../compnents/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage}/>       
                <PrivateRoute path="/edit/:id" component={EditExpensePage} /> 
                <Route path="/help" component={HelpPage} />
                <Route component={NotFountPage} />
            </Switch>        
        </div>
    </Router>
);

export default AppRouter;