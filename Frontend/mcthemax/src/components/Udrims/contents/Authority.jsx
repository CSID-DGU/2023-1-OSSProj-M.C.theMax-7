import styled from "styled-components";
import { DarkGray, Orange, PhantomB } from "../../../assets/color/color";
import { headers } from "./AuthTable";
import { useState } from "react";

const Authority = () => {
  const datas = [
    {
      authority: "학생(학부)",
      campus: "서울캠퍼스",
      user: "학생",
      number: "2018112039",
      authStatus: "true",
    },
  ];
  const headerKey = headers.map((header) => header.value);

  const [isChecked, setIsChecked] = useState(true);
  return (
    <Container>
      <H2>대표권한변경</H2>
      <Auth>현재 권한은 학생(학부)(2018112039)입니다.</Auth>
      <AuthExplanation>
        <Color fontSize="14px">[대표권한 관련 설명]</Color>
        대표권한을 선택 후 "임시변경" 또는 "저장" 버튼을 눌러 대표권한을 변경할
        수 있습니다.
        <br /> 변경된 권한에 맞춰 mDRIMS 시스템 메뉴 및 구성이 새로 구성됩니다.
        <br />
        <br />
        <br />
        <Color fontSize="12px">"대표권한이란"</Color>
        mDRIMS 시스템 로그인 시, 처음 적용되는 권한입니다.
        <br /> mDRIMS 통합정보시스템은 사용자의 권한(직원권한, 교원권한,
        학생권한, 졸업생권한 등)에 맞춰 최적화된 서비스를 제공합니다.
        <br /> 대표권한을 선택하시면, 로그인 시에 프로그램 사용권한 및 시스템
        메뉴 맞춤 설계의 서비스를 받으실 수 있습니다.
      </AuthExplanation>
      <Title>변경가능한 권한</Title>
      <CheckContainer>
        <CheckAuth>
          <thead>
            <tr>
              {headers.map((header) => (
                <TH key={header.text}>{header.text}</TH>
              ))}
            </tr>
          </thead>
          <tbody>
            {datas &&
              datas.map((data, index) => (
                <tr key={index}>
                  {headerKey.map((key) =>
                    key == "authStatus" ? (
                      <TD key={key + index}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        ></input>
                      </TD>
                    ) : (
                      <TD key={key + index}>{data[key]}</TD>
                    )
                  )}
                </tr>
              ))}
          </tbody>
        </CheckAuth>
      </CheckContainer>
      <Etc>
        * 각종 공지사항(학사, 장학, 취업, 연구 등)은
        포털(https://mcthemax.click)를 참조하시기 바랍니다.
      </Etc>
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

const Auth = styled.div`
  width: 80vw;
  height: 5vh;
  border: 1px solid #e6e8e7;
  color: ${PhantomB};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5vh;
`;

const AuthExplanation = styled.div`
  width: 80vw;
  height: 20vh;
  border: 1px solid #e6e8e7;
  font-size: 12px;
  margin-bottom: 5vh;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 25vh;
  margin-bottom: 5vh;
  border: 1px solid #e6e8e7;
  border-top: 0;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  align-self: flex-start;
  margin-left: 2.5vw;
  margin-bottom: 1vh;
`;

const CheckAuth = styled.table`
  border: 1px solid #e6e8e7;
  border-left: 0;
  border-right: 0;
  font-size: 12px;
  border-spacing: 0px;
  border-collapse: collapse;
  color: ${DarkGray};
`;

const TH = styled.th`
  border: 1px solid #e6e8e7;
  :first-of-type {
    border-left: 0;
  }
  :last-of-type {
    border-right: 0;
  }
`;

const TD = styled.td`
  text-align: center;
  color: black;
  border: 1px solid #e6e8e7;
  input {
    accent-color: ${Orange};
  }
  :first-of-type {
    border-left: 0;
  }
  :last-of-type {
    border-right: 0;
  }
`;

const Color = styled.div`
  color: ${Orange};
  font-size: ${(props) => props.fontSize};
`;

const Etc = styled.div`
  align-self: flex-start;
  margin-left: 2.5vw;
  font-size: 12px;
`;

export default Authority;
