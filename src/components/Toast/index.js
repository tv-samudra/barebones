import React from "react";
import { Snackbar, Typography } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useRecoilState, useSetRecoilState } from "recoil";
import { toastAtom } from "../../recoil/toast.recoil";

export function Toast() {
  const [state, setState] = useRecoilState(toastAtom);

  const hideToast = () =>
    setState({ show: false, message: state.message, type: state.type });

  return (
    <Snackbar
      open={state.show}
      autoHideDuration={3000}
      onClose={hideToast}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={hideToast}
        severity={state.type}
      >
        <Typography variant="subtitle1">
          {typeof state.message === "object"
            ? Object.keys(state.message).reduce(
                (prev, curr) => prev + " " + state.message[curr].message,
                ""
              )
            : state.message}
        </Typography>
      </MuiAlert>
    </Snackbar>
  );
}

export const useToast = () => {
  let setState = useSetRecoilState(toastAtom);

  const success = (message) => {
    setState({ show: true, message, type: "success" });
  };

  const error = (message) => {
    setState({ show: true, message, type: "error" });
  };

  return { Toast: { success, error } };
};
