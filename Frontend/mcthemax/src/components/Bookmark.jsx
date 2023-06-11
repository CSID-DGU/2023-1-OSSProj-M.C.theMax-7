import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bgimg from "../assets/img/dgu_background.jpeg";

const Bookmark = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Container>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          &lt;
        </Button>
      </Container>
    </Background>
  );
};
const Background = styled.div`
  background-image: url("https://eclass.dongguk.edu/lmsdata/img/template1/main_bg.jpg");
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  background-color: white;
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
`;

export default Bookmark;
