import { atom } from "recoil";

export const toastAtom = atom({
  key: "toastAtom",
  default: {
    show: false,
    message: "",
    type: "",
  },
});
