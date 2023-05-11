import styled from "styled-components";

const Notice = () => {
  const notices = [
    {
      data: [
        {
          id: "1",
          title: "2023년 깍쟁이장학 선발 일정",
          author: "관리자",
          date: "2023-05-10",
        },
        {
          id: "1",
          title: "2023년 깍쟁이장학 선발 일정",
          author: "관리자",
          date: "2023-05-10",
        },
        {
          id: "1",
          title: "2023년 깍쟁이장학 선발 일정",
          author: "관리자",
          date: "2023-05-10",
        },
        {
          id: "1",
          title: "2023년 깍쟁이장학 선발 일정",
          author: "관리자",
          date: "2023-05-10",
        },
      ],
    },
  ];
  return (
    <Container>
      <Header>통합 공지</Header>
      <Body></Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e6e8e7;
  display: grid;
`;

const Header = styled.div`
  margin: 10px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: bold;
  font-size: large;
`;

const Body = styled.div``;

export default Notice;
