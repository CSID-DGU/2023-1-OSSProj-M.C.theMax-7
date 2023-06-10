import { lazy, useEffect } from "react";
import { useRecoilState } from "recoil";
import { FeatureState } from "../../../stores/class-store";
import { selectedValueState } from "../../../stores/class-store";

const Assignment = lazy(() => import("./Assignment"));
const Attendance = lazy(() => import("./Attendance"));
const Notification = lazy(() => import("./Notification"));
const Score = lazy(() => import("./Score"));

export const AppStart = () => {
  const [feature] = useRecoilState(FeatureState);
  const [selectedValue] = useRecoilState(selectedValueState);

  if (feature === 1) return <Assignment name={selectedValue} />;
  if (feature === 2) return <Notification name={selectedValue} />;
  if (feature === 3) return <Attendance name={selectedValue} />;
  if (feature === 4) return <Score name={selectedValue} />;
  return <></>;
};
