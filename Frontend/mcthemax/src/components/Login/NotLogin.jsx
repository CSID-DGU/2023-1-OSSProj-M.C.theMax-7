import styled from "styled-components";
import logo from "../../assets/img/dgu-logo.png";
import { Orange, Yellow } from "../../assets/color/color";

const NotLogin = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <Text>동국 포털 서비스</Text>
      </Header>
      <Body>
        <Slogan>세상을 비추는 힘, 세상을 깨우는 이름</Slogan>

        <LoginButton>로그인</LoginButton>
      </Body>
      <Footer>
        <Bold>서울캠퍼스</Bold> 04620 서울특별시 중구 필동로 1길 30 <br />
        TEL: 02-2260-3114 <br />
        <br /> <Bold>바이오메디캠퍼스</Bold>
        10326 경기도 고양시 일산동구 동국로32 동국대학교 바이오메디캠퍼스
        <br /> TEL: 02-2260-3114
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Orange};
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  flex: 1;
  width: 100px;
  margin: 5px 10px 5px 10px;
`;

const Text = styled.div`
  flex: 2;
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: x-large;
  font-weight: bold;
`;

const Body = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Slogan = styled.div`
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: large;
  font-weight: bold;
  margin-top: 30vh;
`;

const LoginButton = styled.button`
  background-color: ${Yellow};
  color: white;
  cursor: pointer;
  width: 20vw;
  padding: 10px 20px;
  margin-top: 10vh;
  font-size: 16px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 500;
  border: none;
  border-radius: 10px;
  outline: none;
  text-decoration: none;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px -1px #{rgba(#275efe, 0.32)};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 10vh;
  flex: 1;
  border-top: 1px solid #414a4c;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: small;
`;

const Bold = styled.div`
  font-weight: bold;
`;

export default NotLogin;
