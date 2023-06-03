import React, {lazy} from "react";
import dummy from "../../../db/ClassDB.json"
import styled from "styled-components";

const Kanbanboard = lazy(() => import("./eKanban/Kanbanboard"));

const Assignment = (props) =>{
    const assignlist = dummy.assignment.filter(attend => (attend.name === props.name));
    return(
        <div>
            <Text> 과제</Text>
            <Kanbanboard />
        </div>
    );
}

const Text = styled. div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export default Assignment;