import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../stores/login-store";
import { Orange } from "../../assets/color/color";

const Classes = () => {
  const isLoggedIn = useRecoilValue(LoginState);

  const data = [
    {
      id: "1",
      name: "오픈소스소프트웨어프로젝트",
    },
    { id: "2", name: "컴퓨터공학종합설계1" },
    { id: "3", name: "일본한자음쉽게이해하기" },
    { id: "4", name: "컴퓨터네트워킹" },
    { id: "5", name: "개별연구(CS 감성챗봇 연구)" },
  ];

  return (
    <Container>
      <Header>내 강의실</Header>
      <Body>
        {isLoggedIn ? (
          <Lectures>
            {data &&
              data.map((lecture, index) => (
                <LectureContainer key={index}>
                  <Lecture>{lecture.name}</Lecture>
                  <Button>강의실 가기</Button>
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
  margin-right: 20px;
  border-bottom: 1px solid #e6e8e7;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: bold;
  margin-bottom: 5px;
`;

const Button = styled.button`
  width: 100px;
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
