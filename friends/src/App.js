import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/private/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Login} />
      <Route path='/Login' component={Login} />
      <PrivateRoute exact path='/Friends' component={Friends} />
    </div>
  );
}

export default App;
