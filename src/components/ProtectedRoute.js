import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      return (
        localStorage.getItem('userlist_loggedIn')==='true' ? <Component {...props} {...rest} />
          : <Redirect to='/' />
      )
    }} />
  )
}

export default ProtectedRoute
