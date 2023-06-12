import styled from "styled-components";
import { Orange } from "../../../assets/color/color";
import moment from "moment";
import { DAYS, TIMES, timeSlots } from "../../../utils/TimetableUtils";

const Timetable = () => {
  return (
    <Container>
      <H2>개인 강의 시간표 조회</H2>
      <Title>강의 시간표</Title>
      <TableContainer>
        <Table>
          <tr>
            <th></th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
          </tr>
          <tr>
            <th>9:00 - 9:30</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>9:30 - 10:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>10:00 - 10:30</th>
            <td></td>
            <td rowSpan="4">
              <LectureContainer>
                <LectureName>대학생을위한실용금융</LectureName>
                <LectureRoom>학림관 J11</LectureRoom>
              </LectureContainer>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>10:30 - 11:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>11:00 - 11:30</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>11:30 - 12:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>12:00 - 12:30</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>12:30 - 13:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>13:00 - 13:30</th>
            <td rowSpan="4">
              <LectureContainer>
                <LectureName>오픈소스소프트웨어프로젝트</LectureName>
                <LectureRoom>정보문화관P P404</LectureRoom>
              </LectureContainer>
            </td>
            <td></td>
            <td rowSpan="4">
              <LectureContainer>
                <LectureName>오픈소스소프트웨어프로젝트</LectureName>
                <LectureRoom>정보문화관Q Q202</LectureRoom>
              </LectureContainer>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>13:30 - 14:00</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>14:00 - 14:30</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>14:30 - 15:00</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>15:00 - 15:30</th>
            <td></td>
            <td rowSpan="3">
              <LectureContainer>
                <LectureName>컴퓨터네트워킹</LectureName>
                <LectureRoom>신공학관5145</LectureRoom>
              </LectureContainer>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>15:30 - 16:00</th>
            <td></td>
            <td></td>
            <td rowSpan="3">
              <LectureContainer>
                <LectureName>컴퓨터네트워킹</LectureName>
                <LectureRoom>신공학관5145</LectureRoom>
              </LectureContainer>
            </td>
            <td></td>
          </tr>
          <tr>
            <th>16:00 - 16:30</th>
            <td></td>
            <td></td>
            <td rowSpan="4">
              <LectureContainer>
                <LectureName>컴퓨터공학종합설계1</LectureName>
                <LectureRoom>신공학관6144</LectureRoom>
              </LectureContainer>
            </td>
          </tr>
          <tr>
            <th>16:30 - 17:00</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>17:00 - 17:30</th>
            <td></td>
            <td rowSpan="4">
              <LectureContainer>
                <LectureName>컴퓨터공학종합설계1</LectureName>
                <LectureRoom>신공학관6144</LectureRoom>
              </LectureContainer>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>17:30 - 18:00</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>18:00 - 18:30</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>18:30 - 19:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </Table>
      </TableContainer>
    </Container>
  );
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
  overflow: scroll;
`;

const Table = styled.table`
  width: 80vw;
  height: 75vh;
  border: 1px solid #e6e8e7;
  border-collapse: collapse;

  th,
  td {
    width: calc(80vw / 6);
    height: calc(75vh / 20);
    border: 1px solid #e6e8e7;
  }
`;

const LectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LectureName = styled.div`
  font-weight: bold;
  font-size: 11pt;
  margin-bottom: 1vh;
`;

const LectureRoom = styled.div`
  font-size: 10pt;
`;

export default Timetable;
