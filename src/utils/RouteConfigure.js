export class RouteMaster {
  basePath = "/app";
  defaultRoute = "/home";
  routes = [];
  constructor({ basePath = "", defaultRoute = "" }={}) {
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

export class Route {
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
