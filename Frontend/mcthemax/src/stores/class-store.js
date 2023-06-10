import { atom } from "recoil";

export const FeatureState = atom({
  key: "FeatureState",
  default: 1,
});

export const selectedValueState = atom({
  key: "selectedValueState",
  default: "선택된 강의실이 없습니다.",
});
