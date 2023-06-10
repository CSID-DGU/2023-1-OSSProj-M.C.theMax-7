import { atom } from "recoil";

export const FeatureState = atom({
    key: "FeatureState",
    default: 1,
});

export const selectedValueState = atom({
    key: 'selectedValueState',
    default: '강의실을 선택하세요',
});