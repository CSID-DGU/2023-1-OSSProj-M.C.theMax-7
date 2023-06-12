import styled from "styled-components";
import { DarkGray, Orange } from "../../../assets/color/color";
import { useEffect } from "react";
import { getGrade } from "../../../api/udrimsApi";
import { useState } from "react";
import GradeDetail from "./GradeDetail";

const Grade = () => {
  const [datas, setDatas] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    let data = window.localStorage.getItem("X-AUTH-TOKEN");
    getGrade(data).then((res) => {
      setDatas(res.list);
    });
  }, []);

  return (
    <Container>
      <H2>금학기 성적 관리</H2>
      <Title>금학기 수강 강좌</Title>
      <LectureContainer>
        {datas &&
          datas.map((lecture, index) => (
            <LectureMap>
              <Lecture key={index} onClick={() => setSelectedIndex(index)}>
                {lecture.name}
              </Lecture>
              <FinalGrade>최종 성적: {lecture.score}</FinalGrade>
            </LectureMap>
          ))}
      </LectureContainer>
      <Title>성적 세부 정보</Title>
      {datas && <GradeDetail datas={datas} selectedIndex={selectedIndex} />}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 10vh;
  left: 15vw;
  width: 85vw;
  height: 90vh;
  border-top: 1px solid #e6e8e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  scroll-behavior: auto;
`;

const H2 = styled.h2`
  align-self: flex-start;
  margin-left: 2.5vw;
  color: ${Orange};
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  align-self: flex-start;
  margin-left: 2.5vw;
  margin-bottom: 1vh;
`;

const LectureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: 1px solid #e6e8e7;
  width: 80vw;
  height: 10vh;
  margin-bottom: 1vh;
`;

const LectureMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lecture = styled.button`
  margin: 10px;
  border: 1px solid #e6e8e7;
  background-color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  width: 15vw;
  cursor: pointer;
  &:hover {
    background-color: ${Orange};
  }
`;

const FinalGrade = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

export default Grade;
