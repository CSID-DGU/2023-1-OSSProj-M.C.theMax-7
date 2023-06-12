import React, { lazy } from "react";
import dummy from "../../../db/ClassDB";
import styled from "styled-components";

const Kanbanboard = lazy(() => import("./eKanban/Kanbanboard"));

const Assignment = (props) => {

  return (
    <Container>
      <Body>
        <Kanbanboard lecture={props} />
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
  margin: 0 auto;
  /* height: 50vh; */
`;

export default Assignment;
