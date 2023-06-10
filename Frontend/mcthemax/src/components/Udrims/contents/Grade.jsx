import styled from "styled-components";
import { DarkGray, Orange } from "../../../assets/color/color";
import { useEffect } from "react";
import { getGrade } from "../../../api/udrimsApi";
import { useState } from "react";

const Grade = () => {
  const [datas, setDatas] = useState([]);
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
              <Lecture key={index}>{lecture.name}</Lecture>
              <FinalGrade>최종 성적: {lecture.score}</FinalGrade>
            </LectureMap>
          ))}
      </LectureContainer>
      <Title>성적 세부 정보</Title>
      <GradeContainer>
        <DataContainer>
          <Name>학수번호</Name>
          <Data>{datas[selectedIndex].num}</Data>
        </DataContainer>
        <DataContainer>
          <Name>교과목명</Name>
          <Data>{datas[selectedIndex].name}</Data>
        </DataContainer>
        <DataContainer>
          <Name>담당교원</Name>
          <Data>{datas[selectedIndex].professor}</Data>
        </DataContainer>
        <DataContainer>
          <Name>학점</Name>
          <Data>{datas[selectedIndex].grade}</Data>
        </DataContainer>
        <DataContainer>
          <Name>출석</Name>
          <Data>{datas[selectedIndex].attendence}</Data>
        </DataContainer>
        <DataContainer>
          <Name>출석 만점점수</Name>
          <Data>{datas[selectedIndex].attendence_max}</Data>
        </DataContainer>
        <DataContainer>
          <Name>중간고사</Name>
          <Data>{datas[selectedIndex].midterm}</Data>
        </DataContainer>
        <DataContainer>
          <Name>중간고사 만점점수</Name>
          <Data>{datas[selectedIndex].midterm_max}</Data>
        </DataContainer>
        <DataContainer>
          <Name>기말고사</Name>
          <Data>{datas[selectedIndex].fin}</Data>
        </DataContainer>
        <DataContainer>
          <Name>기말고사 만점점수</Name>
          <Data>{datas[selectedIndex].fin_max}</Data>
        </DataContainer>
        <DataContainer>
          <Name>과제1</Name>
          <Data>{datas[selectedIndex].assignment[0].score}</Data>
        </DataContainer>
        <DataContainer>
          <Name>과제1 만점점수</Name>
          <Data>{datas[selectedIndex].assignment[0].max_score}</Data>
        </DataContainer>
        <DataContainer>
          <Name>과제2</Name>
          <Data>{datas[selectedIndex].assignment[1].score}</Data>
        </DataContainer>
        <DataContainer>
          <Name>과제2 만점점수</Name>
          <Data>{datas[selectedIndex].assignment[1].max_score}</Data>
        </DataContainer>
        <DataContainer>
          <Name>과제3</Name>
          <Data>{datas[selectedIndex].assignment[2].score}</Data>
        </DataContainer>
        <DataContainer>
          <Name>과제3 만점점수</Name>
          <Data>{datas[selectedIndex].assignment[2].max_score}</Data>
        </DataContainer>
      </GradeContainer>
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

const GradeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: 1px solid #e6e8e7;
  width: 80vw;
  height: 60vh;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  border-bottom: 1px solid #e6e8e7;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 1vh;
  color: ${DarkGray};
  padding-top: 30px;
`;

const Data = styled.div``;

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
