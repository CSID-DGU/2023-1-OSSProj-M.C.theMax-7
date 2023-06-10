import { atom } from "recoil";

export const CategoryState = atom({
  key: "CategoryState",
  default: 1,
});

export const SubCategoryState = atom({
  key: "SubCategoryState",
  default: 1,
});
