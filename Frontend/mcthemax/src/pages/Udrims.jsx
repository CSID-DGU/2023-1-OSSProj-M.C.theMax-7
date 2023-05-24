import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { LoginState } from "../stores/login-store";

function Udrims() {
  const isLoggedIn = useRecoilValue(LoginState);
    
  return <div>Udrims</div>;
}

export default Udrims;
