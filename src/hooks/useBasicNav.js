import { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { navBasic } from "../recoil/Navigations.atom";

 /**
   * @typedef {Object} BasicNav
   * @property {string} activeTab - the active route name
   * @property {Function} setActiveTab - Setter for the setting the active tab
   */
/**
 * @method useBasicNav
 * @param {('home')} current - set the given tab active
 * @returns {BasicNav}
 */
export const useBasicNav = (current) => {
  const [currentActive, setCurrentActive] = useRecoilState(navBasic);

  const history = useHistory();

  useEffect(() => {
    if (current) setCurrentActive(current);
  }, [current]);
  /**
   * @method setActiveTab - sets the current tab value to the provided route
   * @param {string} tab - path to set to active
   * @param {Boolean=} autoRedirect=true - defaults to true, redirects automatically to the related route.
   */
  const setActiveTab = (tab, autoRedirect = true) => {
    setCurrentActive(tab);
    if (autoRedirect) history.push(tab);
  };

 
  return { activeTab: currentActive, setActiveTab };
};
