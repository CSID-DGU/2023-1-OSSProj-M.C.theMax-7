import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Orange } from "../assets/color/color";
import { useRecoilState } from "recoil";
import { ModalState } from "../stores/modal-store";

const Bookmark = () => {
  const notices = [
    {
      id: "1",
      title: "2023년 깍쟁이장학 선발 일정",
      author: "관리자",
      date: "2023-05-10",
    },
    {
      id: "2",
      title: "2023년 깍쟁이장학 선발 일정 ",
      author: "관리자",
      date: "2023-05-10",
    },
    {
      id: "3",
      title: "2023년 깍쟁이장학 선발 일정",
      author: "관리자",
      date: "2023-05-10",
    },
    {
      id: "4",
      title: "2023년 깍쟁이장학 선발 일정",
      author: "관리자",
      date: "2023-05-10",
    },
    {
      id: "5",
      title: "2023년 깍쟁이장학 선발 일정",
      author: "관리자",
      date: "2023-05-10",
    },
    {
      id: "6",
      title: "2023년 깍쟁이장학 선발 일정",
      author: "관리자",
      date: "2023-05-10",
    },
    {
      id: "7",
      title: "2023년 깍쟁이장학 선발 일정",
      author: "관리자",
      date: "2023-05-10",
    },
    {
      id: "8",
      title: "2023년 깍쟁이장학 선발 일정",
      author: "관리자",
      date: "2023-05-10",
    },
    {
      id: "9",
      title: "2023년 깍쟁이장학 선발 일정",
      author: "관리자",
      date: "2023-05-10",
    },
  ];
  const navigate = useNavigate();
  const [isModal, setIsModal] = useRecoilState(ModalState);
  return (
    // <Background>
    <Container>
      <Header>
        <Button
          onClick={() => {
            setIsModal(false);
          }}
        >
          &lt;
        </Button>
        <Title>공지 알람</Title>
      </Header>
      <Body>
        {notices &&
          notices.map((notice, index) => (
            <NoticeContainer key={index}>
              <Notices>공지</Notices>
              <NoticeMain>
                <NoticeTitle>{notice.title}</NoticeTitle>
                <NoticeAbout>
                  <NoticeDate>{notice.date}</NoticeDate>
                  <NoticeAuthor>{notice.author}</NoticeAuthor>
                </NoticeAbout>
              </NoticeMain>
            </NoticeContainer>
          ))}
      </Body>
    </Container>
    // </Background>
  );
};

const Container = styled.div`
  position: fixed;
  align-items: flex-start;
  width: 27vw;
  background-color: white;
  /* position: absolute; */
  height: 100vh;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  border: 1px solid black;
  overflow: scroll;
`;

const Header = styled.div`
  padding: 2vh 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: ${Orange};
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${Orange};
  font-size: 18px;
  margin-left: 1vw;
  color: white;
`;

const Title = styled.div`
  position: absolute;
  font-weight: bold;
  left: 50%;
  transform: translate(-50%, 0%);
  font-size: 18px;
  color: white;
`;

const Body = styled.div``;

const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  margin-bottom: 1vh;
  :nth-child(1) {
    margin-top: 1vh;
  }
`;

const Notices = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: bold;
  font-size: 12px;
  color: ${Orange};
  margin: 1rem 0rem 1rem 0;
  text-align: center;
  flex: 1;
`;

const NoticeMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 5;
`;

const NoticeTitle = styled.button`
  outline: none;
  background-color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const NoticeAbout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  color: #a5a5a5;
`;

const NoticeDate = styled.div`
  font-size: 8px;
  padding-right: 10px;
  border-right: 1px solid #e6e8e7;
`;

const NoticeAuthor = styled.div`
  font-size: 8px;
  margin-left: 10px;
`;

export default Bookmark;
