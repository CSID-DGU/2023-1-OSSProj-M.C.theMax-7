import styled from "styled-components";
import { Orange } from "../../assets/color/color";
import { CHEADERS } from "../../utils/CertpiaUtils";
import logo from "../../assets/img/dgu-black-logo.png";
import { useEffect, useState, useRef } from "react";
import moment from "moment";
import makePdf from "./make_pdf";

const Certpia = () => {
  const datas = [
    {
      id: "1",
      lectureName: "오픈소스소프트웨어프로젝트",
      credit: "3.0",
      grade: "A+",
    },
    {
      id: "2",
      lectureName: "웹프로그래밍",
      credit: "3.0",
      grade: "A+",
    },
    {
      id: "3",
      lectureName: "오픈소스소프트웨어실습",
      credit: "3.0",
      grade: "A+",
    },
    {
      id: "4",
      lectureName: "컴퓨터공학종합설계1",
      credit: "3.0",
      grade: "A+",
    },
    {
      id: "5",
      lectureName: "컴퓨터네트워킹",
      credit: "3.0",
      grade: "A+",
    },
    {
      id: "6",
      lectureName: "일본한자음쉽게이해하기",
      credit: "1.0",
      grade: "P",
    },
    {
      id: "7",
      lectureName: "기업사회맞춤형캡스톤디자인1",
      credit: "3.0",
      grade: "P",
    },
  ];

  const headerKey = CHEADERS.map((header) => header.value);

  const onClick = async (e) => {
    e.preventDefault();
    await makePdf.viewWithPdf();
  };

  const [nowDate, setNowDate] = useState();

  useEffect(() => {
    setNowDate(moment(new Date()).format("YYYY-MM-DD hh:mm:ss"));
  }, []);

  const ref = useRef();
  return (
    <Container>
      <Paper ref={ref}>
        <Content>
          <Title>2023학년도 1학기 성적증명서</Title>
          <UserInfo>
            <UserContainer>
              <SubTitle>성명</SubTitle>
              <Info>정원호</Info>
            </UserContainer>
            <UserContainer>
              <SubTitle>학번</SubTitle>
              <Info>2018112039</Info>
            </UserContainer>
            <UserContainer>
              <SubTitle>학년</SubTitle>
              <Info>4</Info>
            </UserContainer>
            <UserContainer>
              <SubTitle>대학</SubTitle>
              <Info>공과대학</Info>
            </UserContainer>
            <UserContainer gridColumn="span 2">
              <SubTitle>학과/전공</SubTitle>
              <Info>컴퓨터공학전공</Info>
            </UserContainer>
          </UserInfo>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  {CHEADERS.map((header) => (
                    <TH key={header.text}>{header.text}</TH>
                  ))}
                </tr>
              </thead>
              <tbody>
                {datas &&
                  datas.map((data, index) => (
                    <tr key={index}>
                      {headerKey.map((key) =>
                        key == "year-semester" ? (
                          <TD key={key + index}>2023-1</TD>
                        ) : (
                          <TD key={key + index}>{data[key]}</TD>
                        )
                      )}
                    </tr>
                  ))}
              </tbody>
            </Table>
          </TableContainer>
        </Content>
        <Footer>
          <Img src={logo} />
          <Print>출력자: 정*호(201811****)</Print>
          <Print>출력일: {nowDate} </Print>
        </Footer>
      </Paper>
      <Button onClick={onClick}>PDF로 보기</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150vh;
  width: 100%;
  background-color: grey;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Paper = styled.div`
  height: 842px;
  width: 595px;
  margin: 30px;
  margin-top: 0;
  background-color: white;
  text-align: center;
`;

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: none;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 2px #a9a9a9;
  background-color: white;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: ${Orange};
    color: white;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18pt;
  font-weight: bold;
  margin-top: 10px;
  text-decoration: underline;
`;

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  width: 535px;
`;

const UserContainer = styled.div`
  display: flex;
  grid-column: ${(props) => props.gridColumn};
  border: 1px solid black;
  border-spacing: 0px;
  border-collapse: collapse;
  align-items: center;
  :nth-of-type(2) {
    border-left: none;
  }
  :nth-of-type(3) {
    border-left: none;
  }
  :nth-of-type(4) {
    border-top: none;
  }
  :nth-of-type(5) {
    border-left: none;
    border-top: none;
  }
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  background-color: #a9a9a9;
  width: 80px;
  height: 25px;
  line-height: 25px;
`;

const Info = styled.div`
  font-size: 10pt;
  margin-left: 5px;
`;

const TableContainer = styled.div`
  height: 500px;
`;

const Table = styled.table`
  border: 1px solid black;
  margin-top: 20px;
  width: 535px;
  border-spacing: 0px;
  border-collapse: collapse;
  font-size: 10pt;
  height: 400px;
`;

const TH = styled.th`
  border: 1px solid black;
  height: 30px;
  background-color: #a9a9a9;
`;

const TD = styled.td`
  text-align: center;
  border-left: 1px solid black;
  /* table-layout: fixed; */
  /* overflow: hidden; */
  height: 20px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;
  border-top: 1px solid black;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 90px;
  margin: 0 10px;
`;

const Print = styled.div`
  font-size: 6pt;
  margin: 0 5px;
`;

export default Certpia;
