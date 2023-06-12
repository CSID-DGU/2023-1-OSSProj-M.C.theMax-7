import { useRecoilState, useRecoilValue } from "recoil";
import { FeatureState, selectedValueState } from "../../../stores/class-store";
import { DarkGray, Orange } from "../../../assets/color/color";
import { FEATURES } from "../../../db/class_feats";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const ExitFeats = () => {
  const [isActive, setIsActive] = useState("");
  const [feature, setFeature] = useRecoilState(FeatureState);
  const selectedValue = useRecoilValue(selectedValueState);

  const changeColor = (e) => {
    setIsActive(() => {
      setFeature(Number(e.target.value) + 1);
      return e.target.value;
    });
  };

  useEffect(() => {
    setIsActive(() => {
      return 0;
    });
  }, [selectedValue]);

  return (
    <Container>
      {FEATURES &&
        FEATURES.map((feature, index) => (
          <Button
            key={feature.id}
            value={index}
            className={isActive == index ? "active" : ""}
            onClick={changeColor}
          >
            {feature.name}
          </Button>
        ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1vh;
  height: 4vh;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${DarkGray};
  margin-left: 0.35rem;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 8px -1px #{rgba(#275efe, 0.32)};
  :not(:last-of-type) {
    border-bottom: none;
  }
  &:hover {
    color: ${Orange};
  }
  &.active {
    color: ${Orange};
  }
`;

export default ExitFeats;
