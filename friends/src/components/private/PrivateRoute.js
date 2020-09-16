import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
      <div>
          <Route 
            { ...rest }
            render={() => {
                if(localStorage.getItem('token')) {
                    return <Component />
                } else {
                    return <Redirect to='/Login' />
                }
            }}
          />
      </div>
  )
}

export default PrivateRoute;