import styled from "styled-components";
import dummy from "../../../db/ClassDB";
import { useTable } from "react-table";
import React from "react";
import { Orange } from "../../../assets/color/color";
// import "./table.css"

const Attendance = (props) => {
  console.log(props);
  const attendlist = dummy.attendance.filter(
    (attend) => attend.lectureName === props.name
  );
  const data = React.useMemo(() => attendlist, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "번호",
        accessor: "id",
      },
      {
        Header: "날짜",
        accessor: "day",
      },
      {
        Header: "출석/결석/지각/미처리",
        accessor: "atd",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Container>
      <Body>
        <Table className="container" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  overflow: scroll;
`;

const Table = styled.table`
  width: 60vw;
  height: 50vh;
  border: 1px solid black;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  th,
  td {
    font-size: 14px;
    padding: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;
  }
  thead th {
    position: sticky;
    color: #fff;
    background-color: ${Orange};
  }
  tbody td {
    position: relative;
  }
`;

export default Attendance;
