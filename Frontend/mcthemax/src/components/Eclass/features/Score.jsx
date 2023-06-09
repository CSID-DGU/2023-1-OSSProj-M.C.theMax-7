import styled from "styled-components";
import dummy from "../../../db/ClassDB";
import React from "react";

const Score = (props) => {
    const scorelist = dummy.score.filter(score => (score.name === props.name));
    return(
        <div>
            <Text>성적</Text>
            <Body>

            </Body>
        </div>
    );
}

const Text = styled. div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 0.5rem;
  text-align: center;
`;

const Body = styled.div`
    display: block;
    margin-top:10px;
    margin: 0 auto;
`;

export default Score;