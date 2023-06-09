import React from "react";
import styled from "styled-components";
import dummy from "../../db/ClassDB";

const Classprof = (props) => {
    //console.log(props);
    //교수명 출력
    const classlist = dummy.classes.filter(cls => (cls.name === props.name));
    console.log(classlist);

    return(
        <div>
            {/* {dummy.props.professor} */}
            {classlist.map((cls) => 
            <Span key={cls.id}>
                {cls.professor} 교수님
            </Span>
            )}
        </div>
    );
}

const Span = styled.div`
  margin-top: 8px;
  margin-left: 1rem;
  font-size: 1rem;
`;

export default Classprof;