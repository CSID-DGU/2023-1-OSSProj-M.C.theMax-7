import { atom } from "recoil";

export const FeatureState = atom({
  key: "FeatureState",
  default: 1,
});

export const selectedValueState = atom({
  key: "selectedValueState",
  default: "init",
});
