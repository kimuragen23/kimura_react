import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Detail from "./Detail";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/detail" component={Detail} />
  </Switch>
);

export default Routes;