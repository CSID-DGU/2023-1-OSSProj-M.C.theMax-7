import React, { lazy } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LoginState } from "../stores/login-store";

const Login = lazy(() => import("../components/Login/Login"));
const NotLogin = lazy(() => import("../components/Login/NotLogin"));
const DonggukService = lazy(() =>
  import("../components/Services/DonggukService")
);
const ItService = lazy(() => import("../components/Services/ItService"));
const Assignment = lazy(() => import("../components/MyClass/Assignment"));
const Classes = lazy(() => import("../components/MyClass/Classes"));
const Notice = lazy(() => import("../components/Notice"));

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  return (
    <div>
      <LoginContainer>{isLoggedIn ? <Login /> : <NotLogin />}</LoginContainer>
      <Container>
        <RightContainer>
          <UpsideContainer>
            <ServiceContainer>
              <UdrimsContainer>
                <DonggukService />
              </UdrimsContainer>
              <CertpiaContainer>
                <ItService />
              </CertpiaContainer>
            </ServiceContainer>
            <MyClassContainer>
              <AssignmentContainer>
                <Assignment />
              </AssignmentContainer>
              <ClassContainer>
                <Classes />
              </ClassContainer>
            </MyClassContainer>
          </UpsideContainer>
          <NoticeContainer>
            <Notice />
          </NoticeContainer>
        </RightContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LoginContainer = styled.div`
  flex: 2;
  position: fixed;
  align-items: flex-start;
  width: 27vw;
`;

const RightContainer = styled.div`
  display: flex;
  position: relative;
  left: 27vw;
  width: 73vw;
  flex-direction: column;
  /* flex: 5; */
`;

const UpsideContainer = styled.div`
  display: flex;
`;

const NoticeContainer = styled.div``;

const ServiceContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const UdrimsContainer = styled.div`
  height: 50vh;
`;

const CertpiaContainer = styled.div`
  height: 25vh;
`;

const MyClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ClassContainer = styled.div`
  height: 25vh;
`;

const AssignmentContainer = styled.div`
  height: 50vh;
`;

export default Home;
