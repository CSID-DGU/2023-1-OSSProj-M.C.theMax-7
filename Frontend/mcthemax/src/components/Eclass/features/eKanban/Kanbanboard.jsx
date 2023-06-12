import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import {
  changeAssignmentStatus,
  getAllAssignments,
  getAssignment,
} from "../../../../api/eclassApi";
import { Orange } from "../../../../assets/color/color";
import { useRecoilValue } from "recoil";
import { selectedValueState } from "../../../../stores/class-store";
import { KanbanStatus } from "../../../../utils/KanbanUtils";

export default function KanbanBoard() {
  const [done, setDone] = useState([]);
  const [doing, setDoing] = useState([]);
  const [todo, setTodo] = useState([]);

  const selectedValue = useRecoilValue(selectedValueState);

  useEffect(() => {
    let data = window.localStorage.getItem("X-AUTH-TOKEN");
    if (selectedValue == "init") {
      getAllAssignments(data).then((res) => {
        setDone(
          res.list.filter(
            (assignment) => assignment.assignmentStatus === "DONE"
          )
        );
        setTodo(
          res.list.filter(
            (assignment) => assignment.assignmentStatus === "TODO"
          )
        );
        setDoing(
          res.list.filter(
            (assignment) => assignment.assignmentStatus === "DOING"
          )
        );
      });
    } else {
      let id = { name: selectedValue };
      getAssignment(data, id).then((res) => {
        setDone(
          res.list.filter(
            (assignment) => assignment.assignmentStatus === "DONE"
          )
        );
        setTodo(
          res.list.filter(
            (assignment) => assignment.assignmentStatus === "TODO"
          )
        );
        setDoing(
          res.list.filter(
            (assignment) => assignment.assignmentStatus === "DOING"
          )
        );
      });
    }
  }, [selectedValue]);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log(source, destination, draggableId);

    // drag한 곳과 drop한 곳의 위치가 같은 경우 어떠한 변화도 일어나지 않는다
    if (source.droppableId == destination.droppableId) return;

    //drag한 곳과 drop한 곳의 위치가 다르면 source column에서 해당 item을 지워야한다
    if (source.droppableId == 3) {
      setDone(removeItemById(draggableId, done));
    } else if (source.droppableId == 2) {
      setDoing(removeItemById(draggableId, doing));
    } else {
      setTodo(removeItemById(draggableId, todo));
    }

    //source column에서 지운 item의 정보를 가져온다
    const task = findItemById(draggableId, [...todo, ...doing, ...done]);

    // destination.droppableId == 1 : TODO, 2: DOING, 3: DONE
    console.log(task, destination.droppableId);

    //destination column에 item을 새로 추가한다
    if (destination.droppableId == 3) {
      setDone([{ ...task, completed: !task.completed }, ...done]);
    } else if (destination.droppableId == 2) {
      setDoing([{ ...task, completed: !task.completed }, ...doing]);
    } else {
      setTodo([{ ...task, completed: !task.completed }, ...todo]);
    }

    let data = {
      id: task.id,
      assignmentStatus: KanbanStatus[destination.droppableId],
    };

    console.log(data);

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
        <Column
          title={"DOING"}
          tasks={doing}
          id={"2"}
          backgroundColor={Orange}
        />
        <Column title={"DONE"} tasks={done} id={"3"} backgroundColor={Orange} />
      </div>
    </DragDropContext>
  );
}
