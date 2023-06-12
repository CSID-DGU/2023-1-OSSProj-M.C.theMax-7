import styled from "styled-components";
import { DarkGray } from "../../../assets/color/color";
import { useEffect } from "react";

const GradeDetail = ({ datas, selectedIndex }) => {
  console.log(datas, selectedIndex);

  return (
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
      {datas[selectedIndex] &&
        datas[selectedIndex].assignments.map((assignment, index) => (
          <>
            <DataContainer>
              <Name>과제{index + 1}</Name>
              <Data>{datas[selectedIndex].assignments[index].score}</Data>
            </DataContainer>
            <DataContainer>
              <Name>과제{index + 1} 만점점수</Name>
              <Data>{datas[selectedIndex].assignments[index].max_score}</Data>
            </DataContainer>
          </>
        ))}
      {/* <DataContainer>
        <Name>과제1</Name>
        <Data>{datas[selectedIndex].assignments[0].score}</Data>
      </DataContainer>
      <DataContainer>
        <Name>과제1 만점점수</Name>
        <Data>{datas[selectedIndex].assignments[0].max_score}</Data>
      </DataContainer>
      <DataContainer>
        <Name>과제2</Name>
        <Data>{datas[selectedIndex].assignments[1].score}</Data>
      </DataContainer>
      <DataContainer>
        <Name>과제2 만점점수</Name>
        <Data>{datas[selectedIndex].assignments[1].max_score}</Data>
      </DataContainer>
      <DataContainer>
        <Name>과제3</Name>
        <Data>{datas[selectedIndex].assignments[2].score}</Data>
      </DataContainer>
      <DataContainer>
        <Name>과제3 만점점수</Name>
        <Data>{datas[selectedIndex].assignments[2].max_score}</Data>
      </DataContainer> */}
    </GradeContainer>
  );
};

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

export default GradeDetail;
