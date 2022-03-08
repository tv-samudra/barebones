//#endregion
import React from "react";
import { useHistory } from "react-router-dom";
import { getPersistentAuthentication } from "../../utils/functions";

const Authenticator = ({ shouldAuthenticate = true, ...props }) => {
  let authentication = getPersistentAuthentication();

  let history = useHistory();

  if (shouldAuthenticate) {
    if (authentication?.token) {
      return <>{props.children}</>;
    }
    history.push("/");
  }
  return <>{props.children}</>;
};

export default Authenticator;
