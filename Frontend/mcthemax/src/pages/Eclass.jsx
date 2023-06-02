import React, { lazy } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Login from "../components/Login/Login";
import NotLogin from "../components/Login/NotLogin";
import { LoginState } from "../stores/login-store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import EclassHome from "../components/Eclass/EclassHome";

const Eclasshome = lazy(() => import("../components/Eclass/EclassHome"));

export default function Eclass() {
    const isLoggedIn = useRecoilValue(LoginState);

    return (
        <div>
            <LoginContainer>{isLoggedIn ? <Login /> : <Login />}</LoginContainer>
            <Container>
                <Ehompage>
                  <Text>📝 Online 캠퍼스</Text>
                </Ehompage>
                <ClassContainer>
                  <EclassHome/>
                </ClassContainer>  
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
  margin-top: 0.5rem;
  margin-left: 1rem;
  font-size: 2rem;
  color: black;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const ClassContainer = styled.div`
  display: flex;
  position: relative;
  left: 28vw;
  border: 1px solid black;
  width: 71vw;
  height: 87vh;
`;
