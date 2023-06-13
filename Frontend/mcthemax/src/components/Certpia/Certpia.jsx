import styled from "styled-components";
import { Orange } from "../../assets/color/color";
import { CHEADERS } from "../../utils/CertpiaUtils";
import logo from "../../assets/img/dgu-black-logo.png";
import { useEffect, useState } from "react";
import "./Certpia.css";
import moment from "moment";
import makePdf from "./make_pdf";
import { QRCodeSVG } from "qrcode.react";
import { getGrade, getInfo } from "../../api/udrimsApi";

const Certpia = () => {
  const headerKey = CHEADERS.map((header) => header.value);

  const onClick = async (e) => {
    e.preventDefault();
    await makePdf.viewWithPdf();
  };

  const [nowDate, setNowDate] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [syear, setSyear] = useState();
  const [department, setDepartment] = useState();
  const [d, setD] = useState();

  useEffect(() => {
    let id = window.localStorage.getItem("X-AUTH-TOKEN");
    setNowDate(moment(new Date()).format("YYYY-MM-DD hh:mm:ss"));
    getInfo(id).then((res) => {
      setName(res.data.map.name);
      setNumber(res.data.map.number);
      setSyear(res.data.map.syear);
      setDepartment(res.data.map.department);
    });

    getGrade(id).then((res) => {
      setD(res.list);
    });
  }, []);

  let id = window.localStorage.getItem("X-AUTH-TOKEN");

  return (
    <div className="div_container">
      <div className="div_paper">
        <Content>
          <QRContainer>
            <QRCodeSVG value={`www.mcthemax.click/certpia/${id}`} size="32" />
          </QRContainer>
          <Title>2023학년도 1학기 성적증명서</Title>
          <UserInfo>
            <UserContainer>
              <SubTitle>성명</SubTitle>
              <Info>{name}</Info>
            </UserContainer>
            <UserContainer>
              <SubTitle>학번</SubTitle>
              <Info>{number}</Info>
            </UserContainer>
            <UserContainer>
              <SubTitle>학년</SubTitle>
              <Info>{syear}</Info>
            </UserContainer>
            <UserContainer>
              <SubTitle>대학</SubTitle>
              <Info>공과대학</Info>
            </UserContainer>
            <UserContainer gridColumn="span 2">
              <SubTitle>학과/전공</SubTitle>
              <Info>{department}</Info>
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
                {d &&
                  d.map((data, index) => (
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
          <Print>출력자: {name}(201811****)</Print>
          <Print>출력일: {nowDate} </Print>
        </Footer>
      </div>
      <Button onClick={onClick}>PDF로 보기</Button>
    </div>
  );
};

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

const QRContainer = styled.div`
  margin-left: 500px;
`;

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  width: 500px;
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
  font-size: 8pt;
  margin-left: 5px;
`;

const TableContainer = styled.div`
  height: 500px;
`;

const Table = styled.table`
  border: 1px solid black;
  margin-top: 20px;
  width: 500px;
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
  margin-top: 80px;
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
