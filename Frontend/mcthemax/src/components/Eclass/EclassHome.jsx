import React, { lazy, useState, useEffect } from "react";
import styled from "styled-components";
import dummy from "../../db/ClassDB";
import { useRecoilState, useRecoilValue } from "recoil";
import { FeatureState } from "../../stores/class-store";
import { ExitFeats } from "./features/ExitFeats";
import { selectedValueState } from "../../stores/class-store";
import axios from "axios";

const Classprof = lazy(() => import("./class_prof"));

const EclassHome = () => {
  const [selectedValue, setSelectedValue] = useRecoilState(selectedValueState);
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const [feature, setFeature] = useRecoilState(FeatureState);
  useEffect(() => {
    setFeature(1);
  }, []);

  return (
    <>
      <Container>
        <Select
          className="eclass_name"
          onChange={handleSelectChange}
          value={selectedValue}
        >
          <option value=""> 강의실을 선택하세요</option>
          {dummy.classes.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </Select>

        <Header>
          <Selected>{selectedValue}</Selected>
          <Classprof name={selectedValue} />
        </Header>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  height: 25vh;
  align-items: center;
`;

const Select = styled.select`
  display: block;
  height: 5vh;
  border-radius: 5px;
  text-align: center;
  flex: 1;
  margin: 0 1vw;
  /* appearance: none; */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  border: 1px solid #e6e8e7;
  border-radius: 5px;
  height: 10vh;
  flex: 2;
`;

const Selected = styled.div`
  font-size: 18pt;
  font-weight: bold;
`;

export default EclassHome;
