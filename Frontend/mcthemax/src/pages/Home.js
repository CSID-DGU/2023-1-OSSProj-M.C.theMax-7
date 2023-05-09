import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LoginState } from "../stores/login-store";
import Login from "../components/Login/Login";
import NotLogin from "../components/Login/NotLogin";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  return (
    <Container>
      <LoginContainer>{isLoggedIn ? <Login /> : <NotLogin />}</LoginContainer>
      <RightContainer>
        <UpsideContainer>
          <ServiceContainer>
            <UdrimsContainer>유드림스</UdrimsContainer>
            <CertpiaContainer>서트피아</CertpiaContainer>
          </ServiceContainer>
          <MyClassContainer>
            <AssignmentContainer>내 할 일 보기</AssignmentContainer>
            <ClassContainer>내 강의실</ClassContainer>
          </MyClassContainer>
        </UpsideContainer>
        <NoticeContainer>통합 공지</NoticeContainer>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LoginContainer = styled.div`
  flex: 2;
  position: sticky;
  align-items: flex-start;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const UpsideContainer = styled.div`
  display: flex;
  flex: 2;
`;

const NoticeContainer = styled.div`
  flex: 1;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const UdrimsContainer = styled.div`
  flex: 2;
`;

const CertpiaContainer = styled.div`
  flex: 1;
`;

const MyClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ClassContainer = styled.div`
  flex: 1;
`;

const AssignmentContainer = styled.div`
  flex: 2;
`;

export default Home;
