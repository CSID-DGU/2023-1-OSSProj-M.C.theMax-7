import styled from "styled-components";

const Timetable = () => {
  return <Container>개인 강의 시간표 조회</Container>;
};

const Container = styled.div`
  position: fixed;
  top: 10vh;
  left: 15vw;
  width: 85vw;
  height: 90vh;
  border-top: 1px solid #e6e8e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export default Timetable;
