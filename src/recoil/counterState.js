import { atom } from "recoil";

const counterState = atom({
  key: "counterState",
  default: [], // { timestamp, amount }
});

export default counterState;
