import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, HousesList, House, Person } from './Page';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/houses' component={HousesList} />
      <Route exact path='/houses/:id' component={House} />
      <Route exact path='/person' component={Person} />
    </Switch>
  );
};
