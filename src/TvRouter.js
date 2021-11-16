import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Authenticator from "./components/Authenticator";
import { Loader } from "./components/Preloader/Preloader";
import { RouteConfig } from "./routes";
import { getPath } from "./utils/functions";

const TvRouter = () => (
  <Switch>
    {RouteConfig.routes.map(({ component: Component, ...route }, index) => (
      <Route
        key={index}
        path={getPath(route.path, RouteConfig.basePath)}
        exact
        render={(props) => (
          <Authenticator shouldAuthenticate={route.shouldAuthenticate}>
            <Loader {...props} defaultLoading={route.defaultLoading}>
              <Component />
            </Loader>
          </Authenticator>
        )}
      />
    ))}
    <Redirect
      from="/"
      exact
      to={getPath(RouteConfig.defaultRoute, RouteConfig.basePath)}
    />
  </Switch>
);

export default TvRouter;
