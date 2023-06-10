import styled from "styled-components";
import dummy from "../../../db/ClassDB"
import { useTable } from 'react-table';
import React from "react";
// import "./table.css"

const Attendance = (props) => {
    const attendlist = dummy.attendance.filter(attend => (attend.name === props.name));
    const data = React.useMemo(() => attendlist, []);
    const columns = React.useMemo(() => [
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
    ], []);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({columns, data});

    return(
        <div>
            <Text>출석부</Text>
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
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Body> 
        </div>
    );
}

const Text = styled. div`
  text-align: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-item:center;
  margin-top: 10px;
  height: 50vh;
  border: 1px solid black;
  overflow: scroll;
`;

const Table = styled.table` 
  width: 60vw;
  max-height: 30vh;
  border: 1px solid black;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  th,
  td {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-size: 20px;
    padding: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;
  }
  th {
    text-align: center;
  }
  thead th {
    position: sticky;
    color: #fff;
    background-color: #55608f;
  }
  tbody td {
    position: relative;
  }

`;


export default Attendance;