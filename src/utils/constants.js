import { RouteConfig } from "../routes";

const {basePath} = RouteConfig;

export const Basic_Navs = {
  home: { index: 0, path: `${basePath}/catalog` },
};

export const PERSISTENT_AUTHENTICATION = "tvcpsess";