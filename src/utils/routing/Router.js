
import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from './routes.js'
import PageNotFound from '../../pages/NotFound/NotFound'

const RenderRoutes = () => {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.key}
          path={route.path}
          exact={route.exact}
          render={props => <route.component {...props} />}
        />
      ))}
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default RenderRoutes;