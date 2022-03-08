import { Home } from "./pages/Home";
import { Page } from "./pages/Page";

/** @type {RouteProperties} */
let routeConfig = {
  basePath: "",
  defaultRoute: "/page",
  routes: [
    {
      path: "/home",
      shouldAuthenticate: false,
      component: Home,
      defaultLoading: false,
    },
    {
      path: "/page",
      shouldAuthenticate: false,
      component: Page,
      defaultLoading: false,
    },
    {
      path: "/home/home",
      shouldAuthenticate: false,
      component: Home,
      defaultLoading: false,
    },
    {
      path: "/page/page",
      shouldAuthenticate: false,
      component: Page,
      defaultLoading: false,
    },
  ],
};

export const RouteConfig = routeConfig;
