import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'

function PrivateRoute({ children : Component, ...props}) {
    const location = useLocation();
  return (
    <Route>
        {...props}
        render = {(componentProps) => {
            const isLoggedIn = !!location.state.user;

            if (!isLoggedIn) {
                return <Redirect to="/login"/>
            }

            return Component;
        }}
    </Route>
  )
}

export default PrivateRoute