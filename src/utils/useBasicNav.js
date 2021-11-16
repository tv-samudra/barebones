import { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { navBasic } from "../recoil/Navigations.atom";
import { Basic_Navs } from "./constants";

/**
 * @method useBasicNav
 * @param {('home')} current - set the given tab active
 */
export const useBasicNav = (current) => {
  const [currentActive, setCurrentActive] = useRecoilState(navBasic);

  const history = useHistory();

  useEffect(() => {
    if (current) setCurrentActive(Basic_Navs[current].index);
  }, [current]);
  /**
   * @method setActiveTab - mark the tab as active and change the styling of the nav element
   * @param {('catalog'|'playground'|'dashboard')} tab
   * @param {Boolean=} autoRedirect=true - defaults to true, redirects automatically to the related route.
   */
  const setActiveTab = (tab, autoRedirect = true) => {
    let { index, path = "/" } = Basic_Navs[tab];
    setCurrentActive(index);
    if (autoRedirect) history.push(path);
  };

  return { activeTab: currentActive, setActiveTab };
};
