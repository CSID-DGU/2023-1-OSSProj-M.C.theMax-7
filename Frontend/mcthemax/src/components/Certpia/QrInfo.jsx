import styled from "styled-components";
import { DarkGray, Orange } from "../../assets/color/color";
import { useEffect, useState } from "react";
import { getGrade } from "../../api/udrimsApi";

const QrInfo = () => {
  // const datas = [
  //   {
  //     number: "2018112039",
  //     name: "정원호",
  //     syear: "4",
  //     birthDate: "1998-08-24",
  //     college: "공과대학",
  //     department: "컴퓨터정보통신공학부",
  //     major: "컴퓨터공학전공",
  //     userState: "학생",
  //     phoneNum: "010-4173-5893",
  //   },
  // ];

  const [datas, setDatas] = useState();

  useEffect(() => {
    let data = window.localStorage.getItem("X-AUTH-TOKEN");
    getGrade(data).then((res) => {
      setDatas(res.list);
    });
  }, []);

  return (
    <Container>
      <Title>2023학년도 1학기 성적</Title>
      <GradeContainer>
        {datas &&
          datas.map((data, index) => (
            <>
              <DataContainer>
                <Name>교과목명</Name>
                <Data>{data.name}</Data>
              </DataContainer>
              <DataContainer>
                <Name>담당교원</Name>
                <Data>{data.professor}</Data>
              </DataContainer>
              <DataContainer>
                <Name>학점</Name>
                <Data>{data.grade}</Data>
              </DataContainer>
              <DataContainer>
                <Name>성적</Name>
                <Data>{data.score}</Data>
              </DataContainer>
            </>
          ))}
      </GradeContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  scroll-behavior: auto;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  align-self: flex-start;
  margin-left: 10vw;
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

const FinalGrade = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

export default QrInfo;
