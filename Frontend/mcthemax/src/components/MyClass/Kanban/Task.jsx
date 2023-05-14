import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #e6e8e7;
  box-shadow: 1px 1px 1px 1px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  height: 10vh;
  margin-left: 10px;
  margin-right: 10px;
  /* background-color: ${(props) => bgcolorChange(props)}; */
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
`;

const TextContent = styled.div``;

function bgcolorChange(props) {
  return props.isDragging
    ? "#d5ff96"
    : props.isDraggable
    ? props.isBacklog
      ? "#F2D7D5"
      : "#DCDCDC"
    : props.isBacklog
    ? "#F2D7D5"
    : "#fcfce8";
}

export default function Task({ task, index }) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {/* <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>
                #{task.id}
                {"  "}
              </small>
            </span>
          </div> */}
          <div
            style={{ display: "flex", justifyContent: "center", padding: 5 }}
          >
            <TextContent>{task.title}</TextContent>
          </div>
          {provided.placeholder}
          {/* 위에 코드를 반드시 첨부해야 에러가 뜨지 않음 */}
        </Container>
      )}
    </Draggable>
  );
}
