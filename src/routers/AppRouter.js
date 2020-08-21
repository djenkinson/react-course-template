import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import Header from '../compnents/Header';
import ExpenseDashboardPage from '../compnents/ExpenseDashboardPage';
import AddExpensePage from '../compnents/AddExpensePage';
import EditExpensePage from '../compnents/EditExpensePage';
import HelpPage from '../compnents/HelpPage';
import NotFountPage from '../compnents/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact />
                <Route path="/create" component={AddExpensePage}/>       
                <Route path="/edit/:id" component={EditExpensePage} /> 
                <Route path="/help" component={HelpPage} />
                <Route component={NotFountPage} />
            </Switch>        
        </div>
    </BrowserRouter>
);

export default AppRouter;