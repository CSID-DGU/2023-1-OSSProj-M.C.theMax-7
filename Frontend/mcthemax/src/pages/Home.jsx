import React, { lazy, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginState } from "../stores/login-store";
import { udrimsAuth } from "../api/udrimsApi";
import { ModalState } from "../stores/modal-store";
import Bookmark from "../components/Bookmark";

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
  const isModal = useRecoilValue(ModalState);

  useEffect(() => {
    let token = window.localStorage.getItem("X-AUTH-TOKEN");
    if (isLoggedIn == true) {
      udrimsAuth(token).then((res) => {
        if (res.status == 500) {
          setIsLoggedIn(false);
          window.localStorage.removeItem("X-AUTH-TOKEN");
          alert("로그인 후 이용해주세요");
        }
      });
    }
  }, []);

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
        {isModal ? <Bookmark /> : <></>}
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
