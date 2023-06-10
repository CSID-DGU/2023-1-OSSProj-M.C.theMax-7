import React, { lazy, useState, useEffect } from "react";
import styled from "styled-components";
import dummy from "../../db/ClassDB";
import { useRecoilState, useRecoilValue } from "recoil";
import { FeatureState } from "../../stores/class-store";
import { selectedValueState } from "../../stores/class-store";
import { getLectureInfo } from "../../api/eclassApi";

const Classprof = lazy(() => import("./class_prof"));

const EclassHome = () => {
  const [selectedValue, setSelectedValue] = useRecoilState(selectedValueState);
  const [feature, setFeature] = useRecoilState(FeatureState);
  const [lectures, setLectures] = useState();
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    setFeature(1);
    let data = window.localStorage.getItem("X-AUTH-TOKEN");
    getLectureInfo(data).then((res) => {
      setLectures(res.list);
    });
  }, []);

  useEffect(() => {
    
  }, [selectedValue]);

  return (
    <>
      <Container>
        <Select
          className="eclass_name"
          onChange={handleSelectChange}
          value={selectedValue}
        >
          <option value="init"> 강의실을 선택하세요</option>
          {lectures &&
            lectures.map((option) => (
              <option key={option.id} value={option.lectureName}>
                {option.lectureName}
              </option>
            ))}
        </Select>
        <Header>
          <Selected>{selectedValue == "init" ? "" : selectedValue}</Selected>
          <Classprof lectures={lectures} />
        </Header>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  height: 30vh;
  margin: 0 5vw;
  align-items: center;
`;

const Select = styled.select`
  display: block;
  height: 10vh;
  margin: 0 1vw;
  border-radius: 5px;
  border: 1px solid #e6e8e7;
  text-align: center;
  appearance: none;
  font-size: 12pt;
  font-weight: bold;
  outline: none;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e8e7;
  border-radius: 5px;
  height: 10vh;
  flex: 1;
`;

const Selected = styled.div`
  font-size: 16pt;
  font-weight: bold;
`;

export default EclassHome;
