import React from 'react'
import { Route, Redirect } from 'react-router'
import { isAuthenticated } from './auth'

const PrivateRouteAdmin = ({ children }) => {
    return (
        <Route render={() => {
            return isAuthenticated() && isAuthenticated().user.role == 1 ? children : <Redirect to={{ pathname: '/signin' }} />
        }} />
    )
}

export default PrivateRouteAdmin
