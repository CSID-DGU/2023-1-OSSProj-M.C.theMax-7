import styled from "styled-components";
import logo from "../../assets/img/dgu-logo.png";
import { Orange, Yellow } from "../../assets/color/color";
import RadioGroup from "./Radio/RadioGroup";
import Radio from "./Radio/Radio";
import { useState } from "react";
import { useFormik } from "formik";
import { LoginApi } from "../../api/authApi";
import { useRecoilState } from "recoil";
import { LoginState } from "../../stores/login-store";
import { useNavigate } from "react-router-dom";

const NotLogin = () => {
  // console.log(isLoggedIn, setIsLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [value, setValue] = useState("STUDENT");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
      password: "",
      authority: value,
    },

    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        let data = {
          id: values.id,
          pw: values.password,
          authority: value,
        };
        // setIsLoggedIn(true);
        LoginApi(data).then((res) => {
          console.log(res);
          if (res.status === 200) {
            window.localStorage.setItem("AUTH-TOKEN", res.data.id);
            setIsLoggedIn(true);
          }
        });
      }, 500);
    },
  });

  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <Text>동국대학교 포털</Text>
      </Header>
      <Body>
        <Slogan>세상을 비추는 힘, 세상을 깨우는 이름</Slogan>
        <FormContainer>
          <RadioGroup label="로그인 권한" value={value} onChange={setValue}>
            <Radio value="STUDENT" key="student">
              학습자
            </Radio>
            <Radio value="PROFESSOR" key="professor">
              교수자
            </Radio>
          </RadioGroup>
          {value === "STUDENT" ? (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
            >
              <InputContainer>
                학번
                <Input
                  required
                  id="id"
                  type="text"
                  name="id"
                  placeholder="ID"
                  onChange={formik.handleChange}
                  value={formik.values.id || ""}
                />
              </InputContainer>
              <InputContainer>
                비밀번호
                <Input
                  required
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password || ""}
                />
              </InputContainer>
              <LoginButton>로그인</LoginButton>
            </Form>
          ) : (
            <Form onSubmit={formik.handleSubmit}>
              <InputContainer>
                교번
                <Input
                  required
                  id="id"
                  type="text"
                  name="id"
                  placeholder="ID"
                  onChange={formik.handleChange}
                  value={formik.values.id || ""}
                />
              </InputContainer>
              <InputContainer>
                비밀번호
                <Input
                  required
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password || ""}
                />
              </InputContainer>
              <LoginButton>로그인</LoginButton>
            </Form>
          )}
        </FormContainer>
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
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Slogan = styled.div`
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 22px;
  font-weight: bold;
  margin-top: 10vh;
`;

const LoginButton = styled.button`
  background-color: ${Yellow};
  color: white;
  cursor: pointer;
  width: 20vw;
  padding: 10px 20px;
  margin-top: 5vh;
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
  margin: 1vh 0;
  flex: 1;
  border-top: 1px solid #414a4c;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: small;
`;

const Bold = styled.div`
  font-weight: 900;
  margin: 15px 0;
  padding: 0;
`;

const FormContainer = styled.div`
  margin-top: 10vh;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
`;

const InputContainer = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const Input = styled.input`
  display: inline-block;
  border: 1px solid #e6e8e7;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 1rem;
  height: 30px;
  line-height: 1rem;
  padding: 0 10px;
`;

export default NotLogin;
