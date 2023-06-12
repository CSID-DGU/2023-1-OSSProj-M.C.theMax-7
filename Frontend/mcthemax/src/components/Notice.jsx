import styled from "styled-components";
import { Orange } from "../assets/color/color";
import { useEffect } from "react";
import { getNotices } from "../api/studentApi";
import { useState } from "react";

const Notice = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    getNotices().then((res) => {
      setDatas(res.data.body);
    });
  }, []);

  return (
    <Container>
      <Header>통합 공지</Header>
      <Body>
        {datas &&
          datas.map((notice, index) => (
            <NoticeContainer key={index}>
              <Notices>공지</Notices>
              <NoticeMain>
                <NoticeTitle>
                  <A href={notice.link}>{notice.title}</A>
                </NoticeTitle>
                <NoticeAbout>
                  <NoticeDate>{notice.upload_date}</NoticeDate>
                  <NoticeAuthor>{notice.writer}</NoticeAuthor>
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
  border-top: 1px solid #e6e8e7;
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

const A = styled.a`
  text-decoration: none;
  color: black;
`;

export default Notice;
