import React from "react";
import PropTypes from "prop-types";
import Loader from "../components/utility/Loader/Loader";

export default (LoadedComponent) => {
  const WithLoadingEffect = ({ isLoading, ...props }) =>
    isLoading ? <Loader /> : <LoadedComponent {...props} />;

  WithLoadingEffect.propTypes = {
    isLoading: PropTypes.bool,
  };

  return WithLoadingEffect;
};
