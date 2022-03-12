import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, House, Person } from './Page';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/house/:id' component={House} />
      <Route exact path='/person' component={Person} />
      <Redirect to={'/'} />
    </Switch>
  );
};
