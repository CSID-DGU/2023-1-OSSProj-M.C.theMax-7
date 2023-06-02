import styled from "styled-components";
import dummy from "../../../db/ClassDB.json"

const Attendance = (props) => {
    const attendlist = dummy.attendance.filter(attend => (attend.name === props.name));
    return(
        <div>
            <Text>출석부</Text>
            <Body>
                <table>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>출석/결석/지각/미처리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendlist.map(attend => (
                            <tr key={attend.id}>
                                <td>{attend.day}</td>
                                <td>{attend.atd}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Body> 
        </div>
    );
}

const Text = styled. div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

const Body = styled.div``;

export default Attendance;