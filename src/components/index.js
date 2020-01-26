import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.scss';
import LandingPage from './LandingPage';
import MoviePage from './MoviePage';
import NotFoundPage from './NotFoundPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/movie/:movieId' exact component={MoviePage} />
      <Route exact path='/:unfoundLocation' component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
export default Router;
