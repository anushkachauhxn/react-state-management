import { atom } from "recoil";

const incrementByState = atom({
  key: "incrementByState",
  default: 1,
});

export default incrementByState;
