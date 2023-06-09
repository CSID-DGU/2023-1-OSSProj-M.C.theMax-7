import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginState } from "../../stores/login-store";
import { Orange } from "../../assets/color/color";
import { useEffect, useState } from "react";
import { getClassApi } from "../../api/studentApi";
import { useNavigate } from "react-router-dom";
import { selectedValueState } from "../../stores/class-store";

const Classes = () => {
  const isLoggedIn = useRecoilValue(LoginState);
  const [selectedValue, setSelectedValue] = useRecoilState(selectedValueState);
  const [classes, setClasses] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      let id = window.localStorage.getItem("X-AUTH-TOKEN");
      getClassApi(id).then((res) => {
        setClasses(res.data);
      });
    }
  }, [isLoggedIn]);

  console.log(classes);
  return (
    <Container>
      <Header>내 강의실</Header>
      <Body>
        {isLoggedIn ? (
          <Lectures>
            {classes &&
              classes.map((lecture) => (
                <LectureContainer key={lecture.id}>
                  <Lecture>{lecture.name}</Lecture>
                  <Button
                    onClick={() => {
                      setSelectedValue(lecture.name);
                      navigate("/eclass");
                    }}
                  >
                    강의실 가기
                  </Button>
                </LectureContainer>
              ))}
          </Lectures>
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
  overflow: scroll;
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

const Lectures = styled.div`
  display: flex;
  flex-direction: column;
`;

const LectureContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Lecture = styled.div`
  /* flex: 2; */
  width: 100%;
  margin-right: 20px;
  border-bottom: 1px solid #e6e8e7;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: bold;
  margin-bottom: 5px;
  line-height: 40px;
`;

const Button = styled.button`
  width: 9vw;
  border-radius: 10px;
  background-color: ${Orange};
  color: white;
  cursor: pointer;
  border: none;
  margin-bottom: 10px;
  font-weight: bold;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export default Classes;
