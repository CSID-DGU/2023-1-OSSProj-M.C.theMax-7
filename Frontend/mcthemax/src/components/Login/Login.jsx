import styled from "styled-components";
import logo from "../../assets/img/dgu-logo.png";
import profile from "../../assets/img/dgu-profile-logo.png";
import { Orange, Yellow } from "../../assets/color/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { LogoutApi } from "../../api/authApi";
import { LoginState } from "../../stores/login-store";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { lazy, useState } from "react";
import { ModalState } from "../../stores/modal-store";

const Modal = lazy(() => import("../Bookmark"));

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [isModal, setIsModal] = useRecoilState(ModalState);
  const navigate = useNavigate();
  const logoutHandler = () => {
    LogoutApi().then((res) => {
      if (res.status === 200) {
        window.localStorage.removeItem("X-AUTH-TOKEN");
        setIsLoggedIn(false);
        navigate("/");
      }
    });
  };

  const logoHandler = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} onClick={logoHandler} />
        <Text>동국대학교 포털</Text>
      </Header>
      <Body>
        <Photo src={profile} />
        <Bio>
          <Major>컴퓨터공학전공</Major>
          <Number>2018112039</Number>
        </Bio>
        <Name>정원호 님</Name>
        <Buttons>
          <LogoutButton onClick={logoutHandler}>로그아웃</LogoutButton>
          <ChangePasswordButton>비밀번호 변경</ChangePasswordButton>
        </Buttons>
        <Alarm
          onClick={() => {
            // navigate("/bookmark");
            setIsModal(true);
          }}
        >
          <FontAwesomeIcon icon={faBell} color={Orange} size="2x" />
          <AlertText>즐겨 찾기 알림</AlertText>
          <AlertNumber>0</AlertNumber>
        </Alarm>
      </Body>
      <Footer>
        <Bold>서울캠퍼스</Bold> 04620 서울특별시 중구 필동로 1길 30 <br />
        TEL: 02-2260-3114 <br />
        <br /> <Bold>바이오메디캠퍼스</Bold>
        10326 경기도 고양시 일산동구 동국로32 동국대학교 바이오메디캠퍼스
        <br /> TEL: 02-2260-3114
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Orange};
  height: 100vh;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  flex: 1;
  width: 100px;
  margin: 5px 10px 5px 10px;
  cursor: pointer;
`;

const Text = styled.div`
  flex: 2;
  text-align: center;
  font-size: x-large;
  font-weight: bold;
`;

const Body = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
`;

const Bio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  margin-top: 30px;
`;

const Major = styled.div`
  font-size: large;
  font-weight: bold;
`;

const Number = styled.div`
  font-size: small;
`;

const Name = styled.div`
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: x-large;
  font-weight: bold;
  margin: 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const LogoutButton = styled.button`
  background-color: ${Yellow};
  color: white;
  cursor: pointer;
  width: 5vw;
  padding: 5px;
  font-size: 12px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 500;
  border: none;
  border-radius: 10px;
  outline: none;
  text-decoration: none;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px -1px #{rgba(#275efe, 0.32)};
  margin-right: 10px;
`;

const ChangePasswordButton = styled.button`
  background-color: ${Yellow};
  color: white;
  cursor: pointer;
  width: 7vw;
  padding: 5px;
  font-size: 12px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 500;
  border: none;
  border-radius: 10px;
  outline: none;
  text-decoration: none;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px -1px #{rgba(#275efe, 0.32)};
`;

const Alarm = styled.button`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 80%;
  height: 50px;
  cursor: pointer;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  border: none;
  border-radius: 10px;
  outline: none;
  text-decoration: none;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px -1px #{rgba(#275efe, 0.32)};
  margin-top: 50px;
  padding: 10px 20px;
`;

const AlertText = styled.div`
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: large;
  font-weight: bold;
`;

const AlertNumber = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: x-large;
  color: ${Orange};
  font-weight: bold;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 10vh;
  flex: 1;
  border-top: 1px solid #414a4c;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: small;
`;

const Bold = styled.div`
  font-weight: bold;
`;

export default Login;
