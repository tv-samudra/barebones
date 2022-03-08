/**
 * @typedef Routes
 * @type {Object}
 * @property {string} path - Specify the route name
 * @property {Function} component - Specify the React component to render for the path
 * @property {boolean} wrapLoader - Specifies if the component should be wraped with a Loader component
 * @property {boolean} defaultLoading -Specifies if the loader should start as soon as the component loads
 * @property {boolean} shouldAuthenticate - Specifies if a compenent should be accessible only if a user is authenticated
 */
/**
 * @typedef RouteProperties
 * @type {object}
 * @property {string} basePath - base path if any.
 * @property {Array.<Routes>} routes - Routes array .
 * @property {number} routes.path - path.
 */