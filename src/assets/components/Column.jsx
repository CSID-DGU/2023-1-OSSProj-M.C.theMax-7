import React from "react";
import styled from "styled-components";
import Task from "./Task";
import "./scroll.css";
import { Droppable } from "react-beautiful-dnd";
// drop이 가능한 기능 페이지

const Container = styled.div`
  margin: 0px 3px;
  background-color: #fcefde;
  border-radius: 10px;
  width: 300px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  text-align: center;
  color: white;
  font-weight: 700;
`;

const TaskList = styled.div`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: #fcefde;
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column({ title, tasks, id }) {
  return (
    <Container className="column">
      <Title
        style={{
          top: 15,
          backgroundColor: "#fcb35b",
          position: "sticky",
        }}
      >
        {title}
      </Title>
      <Droppable  droppableId={id}>
        {/* task drop 위치 */}
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={index} index={index} task={task} />
            ))}
            {provided.placeholder} 
            {/* 위 코드를 지우면 에러발생 */}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
