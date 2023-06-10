import { useState } from "react";
import styled from "styled-components";

const Modal = () => {
  return <ModalContainer>모달</ModalContainer>;
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default Modal;
