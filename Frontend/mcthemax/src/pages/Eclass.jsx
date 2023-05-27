import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Login from "../components/Login/Login";
import NotLogin from "../components/Login/NotLogin";
import { LoginState } from "../stores/login-store";

// const Login = lazy(() => import("../components/Login/Login"));
// const NotLogin = lazy(() => import("../components/Login/NotLogin"));

export default function Eclass() {
    const isLoggedIn = useRecoilValue(LoginState);

    return (
        <div>
            <LoginContainer>{isLoggedIn ? <Login /> : <NotLogin />}</LoginContainer>
            <Container>

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
  width: 100vw;
  height: 100vh;
`;