import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './containers/Home';
import Product_Categories from './containers/Product_Categories';

const App = () => (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/product' component={Product_Categories} />
    </Router>
);

export default App;