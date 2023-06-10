import styled from "styled-components";
import React from "react";
import dummy from "../../../db/ClassDB";
import { useTable } from "react-table";
import { Orange } from "../../../assets/color/color";

const Notification = (props) => {
  const notilist = dummy.notification.filter(
    (notice) => notice.name === props.name
  );
  const data = React.useMemo(() => notilist, []);
  const columns = React.useMemo(
    () => [
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
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-size: 14px;
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
    background-color: ${Orange};
  }
  tbody td {
    position: relative;
  }
`;

export default Notification;
