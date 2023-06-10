import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Orange } from "../../../../assets/color/color";

export default function Task({ task, index }) {
  const getDday = () => {
    const nowTime = new Date();
    const dueDateTime = new Date(task.dueDate.slice(0, 10));

    const diff = dueDateTime - nowTime;
    const diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return diffDay;
  };

  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <DueDate>
            D {getDday() >= 0 ? "-" : "+"}{" "}
            {getDday() === 0 ? "day" : Math.abs(getDday())}
          </DueDate>
          <AssignmentContainer>
            <AssignmentName>{task.assignmentName}</AssignmentName>
            <AssignmentClass>{task.lectureName}</AssignmentClass>
          </AssignmentContainer>
          {provided.placeholder}
          {/* 위에 코드를 반드시 첨부해야 에러가 뜨지 않음 */}
        </Container>
      )}
    </Draggable>
  );
}

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #e6e8e7;
  box-shadow: 1px 1px 1px 1px grey;
  padding: 2px;
  color: #000;
  margin-bottom: 8px;
  height: 8vh;
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
`;

const DueDate = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 11px;
  font-weight: bold;
  color: ${Orange};
`;

const AssignmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const AssignmentName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const AssignmentClass = styled.div`
  font-size: 10px;
`;
