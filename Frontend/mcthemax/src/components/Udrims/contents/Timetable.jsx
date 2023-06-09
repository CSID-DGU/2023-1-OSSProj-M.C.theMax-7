import styled from "styled-components";
import { Orange } from "../../../assets/color/color";
import moment from "moment";
import { DAYS, TIMES, timeSlots } from "../../../utils/TimetableUtils";

const data = {
  code: 200,
  message: "test",
  list: [
    {
      id: 1,
      name: "오픈소스소프트웨어프로젝트",
      grade: 3,
      classroom: "정보문화관P404",
      lectureTime: "월13:00-15:00, 수13:00-15:00",
    },
    {
      id: 2,
      name: "오픈소스소프트웨어실습",
      grade: 3,
      classroom: "정보문화관P401",
      lectureTime: "화15:00-16:30, 목15:30-17:00",
    },
    {
      id: 3,
      name: "웹프로그래밍",
      grade: 3,
      classroom: "정보문화관P201",
      lectureTime: "화17:00-19:00, 금16:00-18:00",
    },
  ],
};

const Timetable = () => {
  return (
    <Container>
      <H2>개인 강의 시간표 조회</H2>
      <Title>강의 시간표</Title>
      <TableContainer></TableContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
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

const H2 = styled.h2`
  align-self: flex-start;
  margin-left: 2.5vw;
  color: ${Orange};
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  align-self: flex-start;
  margin-left: 2.5vw;
  margin-bottom: 1vh;
`;

const TableContainer = styled.div`
  width: 80vw;
  height: 75vh;
  border: 1px solid #e6e8e7;
  text-align: center;
`;

export default Timetable;
