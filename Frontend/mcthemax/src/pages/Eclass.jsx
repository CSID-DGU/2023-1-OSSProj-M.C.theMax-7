import React, { lazy, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Login from "../components/Login/Login";
import NotLogin from "../components/Login/NotLogin";
import { LoginState } from "../stores/login-store";
import { AppStart } from "../components/Eclass/features/AppStart";
import { FeatureState } from "../stores/class-store";
import { selectedValueState } from "../stores/class-store";
import { useNavigate } from "react-router-dom";

const EclassHome = lazy(() => import("../components/Eclass/EclassHome"));
const ExitFeat = lazy(() => import("../components/Eclass/features/ExitFeats"));

export default function Eclass() {
  const isLoggedIn = useRecoilValue(LoginState);
  const selectedValue = useRecoilValue(selectedValueState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === false) {
      alert("로그인 후 이용해주세요.");
      navigate("/");
    }
  }, []);

  useEffect(() => {}, [selectedValue]);

  return (
    <div>
      <LoginContainer>
        <Login />
      </LoginContainer>
      <Container>
        <Ehompage>
          <Text>E-Class</Text>
        </Ehompage>
        <ClassContainer>
          <SelectClass>
            <EclassHome />
          </SelectClass>
          <ClassDetail>
            <ExitFeat name={selectedValue} />
            <AppStart />
          </ClassDetail>
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
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Ehompage = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin-left: 1vw;
  left: 27vw;
  height: 10vh;
  align-items: center;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 27vw;
  width: 73vw;
`;

const SelectClass = styled.div`
  border: 1px solid #e6e8e7;
  height: 30vh;
`;

const ClassDetail = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e7;
  height: 60vh;
`;
