import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../stores/login-store";

const Classes = () => {
  const isLoggedIn = useRecoilValue(LoginState);

  return (
    <Container>
      <Header>내 강의실</Header>
      <Body>
        {isLoggedIn ? (
          "내 강의들"
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
  border: 1px solid #e6e8e7;
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

export default Classes;
