import { lazy } from "react";
import { useRecoilValue } from "recoil";
import {
  CategoryState,
  SubCategoryState,
} from "../../../stores/category-store";

const Authority = lazy(() => import("./Authority"));
const Grade = lazy(() => import("./Grade"));
const Record = lazy(() => import("./Record"));
const Timetable = lazy(() => import("./Timetable"));

export const AppNexus = () => {
  const category = useRecoilValue(CategoryState);
  const subcategory = useRecoilValue(SubCategoryState);

  if (category === 1) return <Authority />;
  if (category === 2 && subcategory === 1) return <Record />;
  if (category === 2 && subcategory === 2) return <Timetable />;
  if (category === 2 && subcategory === 3) return <Grade />;
  return <></>;
};
