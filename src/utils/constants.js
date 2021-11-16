import { RouteConfig } from "../routes";

const {basePath} = RouteConfig;

export const Basic_Navs = {
  home: { index: 0, path: `${basePath}/home` },
};

export const PERSISTENT_AUTHENTICATION = "tvcpsess";
