import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { FirebaseContext } from '../../firebase'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const { user } = React.useContext(FirebaseContext)

  return (
    user &&
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/leadsapp/login" />
        )
      }
    />
  )
}

export default PrivateRoute