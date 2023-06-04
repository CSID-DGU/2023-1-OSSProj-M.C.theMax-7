import styled from "styled-components";
import React from "react";
import dummy from "../../../db/ClassDB.json";
import { useTable } from 'react-table';

const Notification = (props) => {
    const notilist = dummy.notification.filter(notice => (notice.name === props.name));
    const data = React.useMemo(() => notilist, []);
    const columns = React.useMemo(() => [
        {
            Header: "번호",
            accessor: "id",
        },
        {
            Header: "날짜",
            accessor: "date",
        },
        {
            Header: "제목",
            accessor: "title",
        },
    ], []);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({columns, data});
    return(
        <div>
            <Text>공지사항</Text>
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
  padding: 5px;
  border: 1px solid black;
  border-radius: 0.5rem;
  text-align:center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 50vh;
  border: 1px solid black;
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
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-size: 20px;
    padding: 2px;
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

export default Notification;