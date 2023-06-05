import styled from "styled-components";
import { DarkGray, Orange } from "../../../assets/color/color";
import { useEffect } from "react";

const datas = [
  {
    number: "2018112039",
    name: "정원호",
    syear: "4",
    birthDate: "1998-08-24",
    college: "공과대학",
    department: "컴퓨터정보통신공학부",
    major: "컴퓨터공학전공",
    userState: "학생",
    phoneNum: "010-4173-5893",
  },
];

const Record = () => {
  return (
    <Container>
      <H2>학적부 열람</H2>
      <Title>학적 기본</Title>
      <RecordContainer>
        <DataContainer>
          <Name>성명</Name>
          <Data>{datas[0].name}</Data>
        </DataContainer>
        <DataContainer>
          <Name>생년월일</Name>
          <Data>{datas[0].birthDate}</Data>
        </DataContainer>
        <DataContainer>
          <Name>학번</Name>
          <Data>{datas[0].number}</Data>
        </DataContainer>
        <DataContainer>
          <Name>대학</Name>
          <Data>{datas[0].college}</Data>
        </DataContainer>
        <DataContainer>
          <Name>학부(과)</Name>
          <Data>{datas[0].department}</Data>
        </DataContainer>
        <DataContainer>
          <Name>주전공</Name>
          <Data>{datas[0].major}</Data>
        </DataContainer>
        <DataContainer>
          <Name>학년</Name>
          <Data>{datas[0].syear}</Data>
        </DataContainer>
        <DataContainer>
          <Name>학생 구분</Name>
          <Data>{datas[0].userState}</Data>
        </DataContainer>
        <DataContainer>
          <Name>연락처</Name>
          <Data>{datas[0].phoneNum}</Data>
        </DataContainer>
      </RecordContainer>
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

const RecordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
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

export default Record;
