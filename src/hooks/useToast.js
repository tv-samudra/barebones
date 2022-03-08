import { useSetRecoilState } from "recoil";
import { toastAtom } from "../recoil/toast.recoil";

/**
 * @typedef {Object} ToastReturn
 * @property {Object} Toast
 * @property {Function} success - Call toast for success message
 * @property {Function} error - Call toast for error message
 */
/**
 * @method useToast - Hook to call out toast component
 * @returns {ToastReturn}
 */
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
