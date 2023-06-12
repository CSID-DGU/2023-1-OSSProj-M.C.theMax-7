import styled from "styled-components";
import { DarkGray, Orange } from "../../../assets/color/color";
import { useEffect } from "react";
import { getInfo } from "../../../api/udrimsApi";
import { useState } from "react";

const Record = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [number, setNumber] = useState();
  const [department, setDepartment] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [syear, setSyear] = useState();
  const [userState, setUserState] = useState("");

  let data = window.localStorage.getItem("X-AUTH-TOKEN");

  useEffect(() => {
    getInfo(data).then((res) => {
      setName(res.data.map.name);
      setBirthDate(res.data.map.birthDate);
      setNumber(res.data.map.number);
      setPhoneNum(res.data.map.phoneNum);
      setSyear(res.data.map.syear);
      setUserState(res.data.map.userState);
      setDepartment(res.data.map.department);
    });
  }, []);

  return (
    <Container>
      <H2>학적부 열람</H2>
      <Title>학적 기본</Title>
      <RecordContainer>
        <DataContainer>
          <Name>성명</Name>
          <Data>{name}</Data>
        </DataContainer>
        <DataContainer>
          <Name>생년월일</Name>
          <Data>{birthDate}</Data>
        </DataContainer>
        <DataContainer>
          <Name>학번</Name>
          <Data>{number}</Data>
        </DataContainer>
        <DataContainer>
          <Name>대학</Name>
          <Data>공과대학</Data>
        </DataContainer>
        <DataContainer>
          <Name>학부(과)</Name>
          <Data>컴퓨터정보통신공학부</Data>
        </DataContainer>
        <DataContainer>
          <Name>주전공</Name>
          <Data>{department}</Data>
        </DataContainer>
        <DataContainer>
          <Name>학년</Name>
          <Data>{syear}</Data>
        </DataContainer>
        <DataContainer>
          <Name>학생 구분</Name>
          <Data>{userState == "STUDENT" ? "학생" : "교수"}</Data>
        </DataContainer>
        <DataContainer>
          <Name>연락처</Name>
          <Data>{phoneNum}</Data>
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
