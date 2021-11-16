import React, { useState, useEffect } from "react";
import { LinearProgress } from "@material-ui/core";
import "./style.css";

const Preloader = ({ defaultLoading = true, ...props }) => {
  let [isLoading, setLoading] = useState(true);
  let [smallLoader, setSmallLoader] = useState(false);

  let loadPrimary = (status = true) => {
    setLoading(status);
  };
  let loadSecondary = (status = true) => setSmallLoader(status);

  useEffect(() => {
    if (defaultLoading === false) {
      loadPrimary(false);
    }
  }, [defaultLoading]);

  return (
    <>
      {isLoading && (
        <div className="loaderHolder" data-testid={"loader"}>
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      )}
      {smallLoader ? (
        <LinearProgress
          style={{ position: "absolute", left: -10, width: "100%", zIndex: 2 }}
        />
      ) : (
        ""
      )}
      {React.cloneElement(props.children, {
        loadPrimary,
        loadSecondary,
      })}
    </>
  );
};

export const Loader = Preloader;
