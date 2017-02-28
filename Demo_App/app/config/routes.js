import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import LoginView from '../views/Login';
import EducationView from '../views/Education';
import DealerOperations from '../views/DealerOperations';
import ComplaintHandling from '../views/complaintHandling';
import Blogs from '../views/Blogs';
import ServiceSupport from '../views/ServiceSupport';
import ProductsPage from '../views/ProductsPage';

import Graphs from '../views/Graphs';
import GridItems from '../views/GridItems';
import TableItems from '../views/TableItems';

import DashboardComponent from '../components/common/DashboardComponent';
import ForgotPassword from '../views/ForgotPassword';
import { Route, Router, IndexRedirect, browserHistory, IndexRoute, Redirect} from 'react-router';
const Routes = (
    <Router history={browserHistory}>
        <Route component={Main}>
            <IndexRedirect form="/main" to="/main" />
            <Route path="main" component={MainView}> </Route>
            <Route path="reports" component={MainView}> </Route>
            <Route path="productsPage" component={ProductsPage}> </Route>
            <Route path="serviceSupport" component={ServiceSupport}> </Route>
            <Route path="dealerOperations" component={DealerOperations}> </Route>
            <Route path="complaintHandling" component={ComplaintHandling}> </Route>
            <Route path="education" component={EducationView}> </Route>
            <Route path="whatsIsnews" component={Blogs}> </Route>
            <Route path="stayConnected" component={MainView}> </Route>
            <Route path="reports/gridItems" component={GridItems}> </Route>
            <Route path="reports/tableItems" component={TableItems}> </Route>
            <Route path="reports/graphs" component={Graphs}> </Route>
        </Route>
        <Route path="/">
            <IndexRedirect form="/" to="/login" />
            <Route path="login" component={LoginView}> </Route>
        </Route>
        <Route>
            <IndexRedirect form="/forgotPassword" to="/forgotPassword" />
            <Route path="forgotPassword" component={ForgotPassword}> </Route>
        </Route>
    </Router>);


export default Routes