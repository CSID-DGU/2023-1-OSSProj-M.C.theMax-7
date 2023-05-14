import { lazy } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { LoginState } from "../../stores/login-store";

const Kanbanboard = lazy(() => import("./Kanban/Kanbanboard"))

const Assignment = () => {
  const isLoggedIn = useRecoilValue(LoginState);

  return (
    <Container>
      <Header>내 할 일 보기</Header>
      <Body>
        {isLoggedIn ? (
          <Kanbanboard />
        ) : (
          <PleaseLogin>로그인 후 이용해주세요</PleaseLogin>
        )}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-left: 1px solid #e6e8e7;
  border-bottom: 1px solid #e6e8e7;
`;

const Header = styled.div`
  margin: 10px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: bold;
  font-size: large;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PleaseLogin = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: bold;
  font-size: large;
`;

export default Assignment;
