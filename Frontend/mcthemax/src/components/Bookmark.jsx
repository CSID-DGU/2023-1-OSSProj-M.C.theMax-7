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
      class: "공과대학",
      title: "2023학년도 1학기 동국장학회 장학생 신청 안내(~6/11(일))",
      author: "학과 관리자",
      date: "2023-06-09",
      url: "https://engineer.dongguk.edu/article/notice1/detail/177555?article_seq=&prt_seq=&category_cd=&searchCondition=TA.SUBJECT&searchKeyword=",
    },
    {
      id: "2",
      class: "공과대학",
      title: "2023학년도 캡스톤디자인 밸류업 프로그램 참여학생 모집(~6/16)",
      author: "학과 관리자",
      date: "2023-06-08",
      url: "https://engineer.dongguk.edu/article/notice1/detail/177476?pageIndex=1&",
    },
    {
      id: "3",
      class: "공과대학",
      title: "[성적]2023-1학기 취득교과목 학점포기제 시행(2차) 안내(~6.12(월))",
      author: "학과 관리자",
      date: "2023-06-07",
      url: "https://engineer.dongguk.edu/article/notice1/detail/177441?article_seq=&prt_seq=&category_cd=&searchCondition=TA.SUBJECT&searchKeyword=",
    },
    {
      id: "4",
      class: "컴퓨터공학",
      title: "[SW교육원] 2023 SW중심대학 공동 해커톤 참가자 모집 공지",
      author: "학과 관리자",
      date: "2023-06-08",
      url: "https://cse.dongguk.edu/article/notice1/detail/177498?pageIndex=1&",
    },
    {
      id: "5",
      class: "컴퓨터공학",
      title: "클라우드 기반 금융 ICT 개발자 양성과정 설명회 공지",
      author: "학과 관리자",
      date: "2023-06-08",
      url: "https://cse.dongguk.edu/article/notice1/detail/177468?pageIndex=1&",
    },
    {
      id: "6",
      class: "컴퓨터공학",
      title: "[필독] 2023-1 IPP 장기 현장실습 졸업기준 대체 인정 공지",
      author: "학과 관리자",
      date: "2023-06-07",
      url: "https://cse.dongguk.edu/article/notice1/detail/177408?pageIndex=1&",
    },
    {
      id: "7",
      class: "장학",
      title: "2023-1학기 국가장학금 Ⅱ유형 지급 기준 및 일정 안내",
      author: "이동렬",
      date: "2023-06-08",
      url: "https://www.dongguk.edu/article/JANGHAKNOTICE/detail/26750675",
    },
    {
      id: "8",
      class: "장학",
      title: "2023-1학기 국가장학금 Ⅰ유형 학생 지급 관련 안내",
      author: "이동렬",
      date: "2023-06-08",
      url: "https://www.dongguk.edu/article/JANGHAKNOTICE/detail/26750670",
    },
    {
      id: "9",
      class: "장학",
      title: "2023-2학기 교내장학(전체) 신청안내",
      author: "김민경",
      date: "2023-06-07",
      url: "https://www.dongguk.edu/article/JANGHAKNOTICE/detail/26750641",
    },
  ];
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
              <Notices>{notice.class}공지</Notices>
              <NoticeMain>
                <NoticeTitle>
                  <A href={notice.url}>{notice.title}</A>
                </NoticeTitle>
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
  flex: 2;
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

const A = styled.a`
  outline: none;
  text-decoration: none;
  color: black;
`;

export default Bookmark;
