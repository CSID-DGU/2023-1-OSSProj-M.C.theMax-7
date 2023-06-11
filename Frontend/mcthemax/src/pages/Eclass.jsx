import React, { lazy, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Login from "../components/Login/Login";
import NotLogin from "../components/Login/NotLogin";
import { LoginState } from "../stores/login-store";
import { AppStart } from "../components/Eclass/features/AppStart";
import { FeatureState } from "../stores/class-store";
import { selectedValueState } from "../stores/class-store";
import { Navigate, useNavigate } from "react-router-dom"

const EclassHome = lazy(() => import("../components/Eclass/EclassHome"));

export default function Eclass(){
    const isLoggedIn = useRecoilValue(LoginState);
    const [feature, setFeature] = useRecoilState(FeatureState);
    // const navigate = useNavigate();

    // useEffect(() => {
    //   if (isLoggedIn === false) {
    //     alert("로그인 후 이용해주세요.");
    //     navigate("/");
    //   }
    // }, []);
    
    return (
        <div>
            <LoginContainer>{isLoggedIn ? <Login /> : <NotLogin />}</LoginContainer>
            <Container>
                <Ehompage>
                  <Text>📝 Online 캠퍼스</Text>
                </Ehompage>
                <ClassContainer>
                  <EclassHome/>
                  <AppStart />
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
  flex-direction: column;
  position: relative;
  left: 28vw;
  border: 1px solid lightgray;
  width: 71vw;
  height: 87vh;
`;
