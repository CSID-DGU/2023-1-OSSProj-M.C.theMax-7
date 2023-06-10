import React, {lazy} from "react";
import dummy from "../../../db/ClassDB"
import styled from "styled-components";

const Kanbanboard = lazy(() => import("./eKanban/Kanbanboard"));

const Assignment = (props) =>{
    const assignlist = dummy.assignment.filter(assign => (assign.lecturename === props.name));
    return(
        <div>
            <Text> 과제</Text>
            <Body>
                <Kanbanboard list={assignlist} />
            </Body>
        </div>
    );
}

const Text = styled. div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 10px;
`;

const Body = styled.div`
  display: block;
  margin: 0 auto;
`;

export default Assignment;