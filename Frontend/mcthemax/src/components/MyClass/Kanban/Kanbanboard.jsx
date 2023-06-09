import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
// Droppable, Draggable 은 필요하지 않음
// Drag&Dropcontext만 필요할 뿐
import Column from "./Column";
import { getAssignmentApi } from "../../../api/studentApi";
import { Orange } from "../../../assets/color/color";
import { KanbanStatus } from "../../../utils/KanbanUtils";
import { changeAssignmentStatus } from "../../../api/eclassApi";

export default function KanbanBoard() {
  const [done, setDone] = useState([]);
  const [todo, setTodo] = useState([]);

  // inprogress는 todo에 있는 칸반들을 자의로 drag drop할 수 있게끔 설정

  // JSONplaceholder 로 백엔드 서버 대신 API시도

  useEffect(() => {
    let id = window.localStorage.getItem("X-AUTH-TOKEN");

    getAssignmentApi(id).then((res) => {
      console.log(res.data);
      setDone(
        res.data.filter((assignment) => assignment.assignmentStatus === "DONE")
      );
      setTodo(
        res.data.filter((assignment) => assignment.assignmentStatus === "TODO")
      );
    });
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log(source, destination);

    // drag한 곳과 drop한 곳의 위치가 같은 경우 어떠한 변화도 일어나지 않는다
    if (source.droppableId == destination.droppableId) return;

    //drag한 곳과 drop한 곳의 위치가 다르면 source column에서 해당 item을 지워야한다
    if (source.droppableId == 3) {
      setDone(removeItemById(draggableId, done));
    } else {
      setTodo(removeItemById(draggableId, todo));
    }

    //source column에서 지운 item의 정보를 가져온다
    const task = findItemById(draggableId, [...todo, ...done]);

    console.log(task, destination.droppableId);
    // destination.droppableId == 1: TODO,  3: DONE

    //destination column에 item을 새로 추가한다
    if (destination.droppableId == 3) {
      setDone([{ ...task, completed: !task.completed }, ...done]);
    } else {
      setTodo([{ ...task, completed: !task.completed }, ...todo]);
    }

    // 서버 통신
    let data = {
      id: task.id,
      assignmentStatus: KanbanStatus[destination.droppableId],
    };

    let token = window.localStorage.getItem("X-AUTH-TOKEN");
    changeAssignmentStatus(data, token).then((res) => console.log(res));
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          // height: "100%",
        }}
      >
        <Column
          title={"TO DO"}
          tasks={todo}
          id={"1"}
          backgroundColor={Orange}
        />
        <Column title={"DONE"} tasks={done} id={"3"} backgroundColor={Orange} />
        {/* <Column title={"TASKS"} tasks={[]} id={"3"} /> */}
      </div>
    </DragDropContext>
  );
}
