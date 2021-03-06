import { Home } from "./pages/Home";

class RouteMaster {
  basePath = "/app";
  defaultRoute = "/home";
  routes = [];
  constructor({ basePath = "/app", defaultRoute = "/home" }) {
    this.basePath = basePath;
    this.defaultRoute = defaultRoute;
  }

  get routeConfig() {
    return this;
  }
}

RouteMaster.prototype.add = function (route) {
  this.routes.push(route);
  return this;
};

class Route {
  path = "";
  component = "";
  shouldAuthenticate = false;
  wrapLoader = false;
  defaultLoading = false;

  /**
   *
   * @param {('path'|'component'|'shouldAuthenticate'|'wrapLoader'|'defaultLoading')} property
   * @param {*} value
   * @returns
   */
  add(property, value) {
    this[property] = value;
    return this;
  }

  get expose() {
    return this;
  }
}

let routeConfig = new RouteMaster({});

let home = new Route().add("path", "/home").add("component",Home);
routeConfig.add(home);

console.log(routeConfig)

export const RouteConfig = routeConfig;
