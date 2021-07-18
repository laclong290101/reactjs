import React from 'react'
import Nav from './components/Nav';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ProductPage from './pages/website/product/products';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/404';
import LayoutAdmin from './layouts/admin';
import LayoutWebsite from './layouts/website';
import Dashboards from './pages/admin/dashboard';
import Detail from './pages/website/product/detail';
import ProductManagerPage from './pages/admin/product';
import ProductAddPage from './pages/admin/product/add';
import SignUp from './pages/user/signup';
import SignIn from './pages/user/signin';
import ProductEditPage from './pages/admin/product/edit';
import CategroyPage from './pages/website/categorypage';
import PrivateRoute from './api/PrivateRoute';
import UserDashboard from './pages/user/userdashboard';
import CategoryManagerPage from './pages/admin/category';
import CategoryEditPage from './pages/admin/category/edit';
import CategoryAddPage from './pages/admin/category/add';
import PrivateRouteAdmin from './api/PrivateRouteAdmin';

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <PrivateRouteAdmin path="/admin/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <PrivateRouteAdmin exact path="/admin">
                                <Redirect to="/admin/dashboard" />
                            </PrivateRouteAdmin>
                            <PrivateRouteAdmin exact path="/admin/dashboard">
                                <Dashboards />
                            </PrivateRouteAdmin>
                            <PrivateRouteAdmin exact path="/admin/product">
                                <ProductManagerPage {...props} />
                            </PrivateRouteAdmin>
                            <PrivateRouteAdmin exact path="/admin/product/add">
                                <ProductAddPage {...props} />
                            </PrivateRouteAdmin>
                            <PrivateRouteAdmin exact path="/admin/product/:id">
                                <ProductEditPage {...props} />
                            </PrivateRouteAdmin>
                            <PrivateRouteAdmin exact path="/admin/categories">
                                <CategoryManagerPage {...props} />
                            </PrivateRouteAdmin>
                            <PrivateRouteAdmin exact path="/admin/categories/add">
                                <CategoryAddPage {...props} />
                            </PrivateRouteAdmin>
                            <PrivateRouteAdmin exact path="/admin/categories/:id">
                                <CategoryEditPage {...props} />
                            </PrivateRouteAdmin>
                        </Switch>
                    </LayoutAdmin>
                </PrivateRouteAdmin>
                <Route>
                    <LayoutWebsite>
                        <Switch>
                            <Route exact path="/">
                                <HomePage {...props} />
                            </Route>
                            <Route exact path="/about">
                                <AboutPage />
                            </Route>
                            <Route exact path="/products">
                                <ProductPage {...props} />
                            </Route>
                            <Route exact path="/categories/:id">
                                <CategroyPage {...props} />
                            </Route>
                            <Route exact path="/product/:id">
                                <Detail />
                            </Route>
                            <Route exact path="/signup">
                                <SignUp />
                            </Route>
                            <Route exact path="/signin">
                                <SignIn />
                            </Route>
                            <PrivateRoute exact path="/user/dashboard">
                                <UserDashboard />
                            </PrivateRoute>
                            <Route path="*">
                                <NotFoundPage />
                            </Route>
                        </Switch>
                    </LayoutWebsite>

                </Route>
            </Switch>
        </Router >
    )
}
export default Routes
