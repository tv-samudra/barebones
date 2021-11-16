import { Home } from "./pages/Home";

export const RouteConfig = {
  routes: [
    {
      path: "/home",
      component: Home,
      shouldAuthenticate: false,
      wrapLoader: false,
      defaultLoading : false
    },
  ],
  basePath: "/app",
  defaultRoute: "/home",
};
