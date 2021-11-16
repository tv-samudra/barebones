import qs from "querystring";
import { PERSISTENT_AUTHENTICATION } from "./constants";

/**
 * @function getPath
 * @description Constructs the absolute path for the routes in the application
 * If the basePath property of the routeConfig is set, it will be
 * appended to the path value of each route
 * @param {string} path  -   The route path
 * @param {string} basePath -The basePath of the routeConfig
 * @returns
 */
export const getPath = (path, basePath) => {
  if (!basePath) return path;
  return `${basePath}${path}`;
};

//#region QueryObject
/**
 * @class QueryObject
 * @description A construction function which helps in generating a queryObject which can be passed to the @see {@link getQueryString}}
 * or getting the queryString itself using the QueryObject's getString method
 */
export function QueryObject() {
  this.queryObject = [];
}
/**
 * @method add
 * @memberof QueryObject
 * @description Add an queryObject
 * @param {string} name - the key of the object
 * @param {*} value - the value of the object
 * @returns
 */
QueryObject.prototype.add = function (name, value) {
  if (name) {
    this.queryObject.push({ name, value });
  }
  return this;
};
/**
 * @memberof QueryObject
 * @method get
 * @description Get the constructed query object
 * @example [{name : "search",value : "A big brown fox"}]
 * @returns
 */
QueryObject.prototype.get = function () {
  return this.queryObject;
};
/**
 * @memberof QueryObject
 * @method getString
 * @description Get the queryString version of the constructed queryObject
 * @example ?search=A%20big%20brown%20fox
 * @returns
 */
QueryObject.prototype.getString = function () {
  let queryString = {};
  let nonEmptyQuery = this.queryObject.filter(
    (item) => item.value || item.value === 0
  );
  for (let i = 0; i < nonEmptyQuery.length; i++) {
    let queryParam = nonEmptyQuery[i];
    queryString[queryParam.name] = queryParam.value;
  }
  return "?" + qs.stringify(queryString);
};
//#endregion

/**
 * @function setPersistentAuthentication
 * @description Set the provided data in the session storage as persistent data
 * @param {*} data - the data to store
 * @returns
 */
export const setPersistentAuthentication = (data) =>
  sessionStorage.setItem(
    PERSISTENT_AUTHENTICATION,
    JSON.stringify({
      ...data,
    })
  );

/**
 * @function getPersistentAuthentication
 * @description get the persisted data
 * @returns
 */
export const getPersistentAuthentication = () => {
  let state = sessionStorage.getItem(PERSISTENT_AUTHENTICATION);
  return JSON.parse(state);
};

/**
 * @function resetPersistentAuthentication
 * @description resets the persistent store
 * @returns
 */
export const resetPersistentAuthentication = () =>
  sessionStorage.setItem(
    PERSISTENT_AUTHENTICATION,
    JSON.stringify({
      token: "",
    })
  );
