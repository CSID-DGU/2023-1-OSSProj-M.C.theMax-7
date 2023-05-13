import styled from "styled-components";
import { Orange } from "../assets/color/color";

const Notice = () => {
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
  ];
  return (
    <Container>
      <Header>통합 공지</Header>
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
  );
};

const Container = styled.div`
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;

const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Notices = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: bold;
  font-size: 12px;
  color: ${Orange};
  margin: 1.5rem 0rem 1.5rem 1rem;
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

export default Notice;
