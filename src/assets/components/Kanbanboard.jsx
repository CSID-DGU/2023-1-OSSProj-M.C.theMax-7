import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
// Droppable, Draggable 은 필요하지 않음 
// Drag&Dropcontext만 필요할 뿐
import Column from "./Column";

export default function KanbanBoard() {
  const [done, setCompleted] = useState([]);
  const [todo, setIncomplete] = useState([]);

  // inprogress는 todo에 있는 칸반들을 자의로 drag drop할 수 있게끔 설정

  // JSONplaceholder 로 백엔드 서버 대신 API시도
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setCompleted(json.filter((task) => task.completed));
        setIncomplete(json.filter((task) => !task.completed));
      });
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // drag한 곳과 drop한 곳의 위치가 같은 경우 어떠한 변화도 일어나지 않는다
    if (source.droppableId == destination.droppableId) return;

    //drag한 곳과 drop한 곳의 위치가 다르면 source column에서 해당 item을 지워야한다
    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, done));
    }else{
      setIncomplete(removeItemById(draggableId, todo));
    }

    //source column에서 지운 item의 정보를 가져온다
    const task = findItemById(draggableId, [...todo, ...done]);

    //destination column에 item을 새로 추가한다
    if (destination.droppableId == 2) {
      setCompleted([{ ...task, completed: !task.completed }, ...done]);
    }else{
      setIncomplete([{ ...task, completed: !task.completed }, ...todo]);
    }
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 style={{ textAlign: "center" }}>과제 진행사항📝</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >  
        <Column title={"TO DO"} tasks={todo} id={"1"} />
        <Column title={"DONE"} tasks={done} id={"2"} />
        <Column title={"TASKS"} tasks={[]} id={"3"} />
      </div>
    </DragDropContext>
  );
}
