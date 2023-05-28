import React, { lazy } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Login from "../components/Login/Login";
import NotLogin from "../components/Login/NotLogin";
import { LoginState } from "../stores/login-store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Eclasshome = lazy(() => import("../components/Eclass/EclassHome"));

export default function Eclass() {
    const isLoggedIn = useRecoilValue(LoginState);

    return (
        <div>
            <LoginContainer>{isLoggedIn ? <Login /> : <Login />}</LoginContainer>
            <Container>
                <Ehompage>
                  <Text>E-class 홈페이지 바로가기</Text>
                  <a href="https://eclass.dongguk.edu/">
                    <Button>
                    <FontAwesomeIcon icon={faHouse} size="2x"  />
                    </Button>
                  </a>
                </Ehompage>
                <UpstairContainer>
                  <MyclassContainer>
                    <Text>📝 Online 캠퍼스</Text>
                    <EclassHome/>
                  </MyclassContainer>
                </UpstairContainer>
                <DownstairContainer>
                    <NotificationContainer>
                      <Text>📌 공지사항</Text>
                      <manual />
                    </NotificationContainer>
                </DownstairContainer>  
            </Container>
        </div>
    );
}

const LoginContainer = styled.div`
  position: fixed;
  align-items: flex-start;
  width: 27vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 73vw;
  height: 100vh;
`;

const Ehompage = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 7vh;
  left: 27vw;
  margin-top: 1rem;
`;

const Text = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Button = styled.button`
  margin: 0px 10px;
  background-color: white;
  outline: none;
  border: 1px solid #a9a9a9;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const UpstairContainer = styled.div`
  display: flex;
  position: relative;
  left: 27vw;
  flex-direction: row;
  border: 1px solid black;
`;

const EclassHome = styled.div`
  display: fixed;
  position: relative;
  margin: 2px 10px;
  border: 1px solid black;
  height: 40vh;
  width: 71vw;
`;

const DownstairContainer = styled.div`
  display: flex;
  position: relative;
  left: 27vw;
`;

const MyclassContainer = styled.div`
  height: 50vh;
//   border: 1px solid black;
`;

const NotificationContainer = styled.div`
  margin-top: 2vh;
  width: 100vw;
  height: 40vh;
  border: 1px solid black;
`;