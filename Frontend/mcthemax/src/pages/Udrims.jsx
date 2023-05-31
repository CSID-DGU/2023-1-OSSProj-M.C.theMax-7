import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { LoginState } from "../stores/login-store";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { lazy } from "react";

const Header = lazy(() => import("../components/Udrims/Header"));
const Menu = lazy(() => import("../components/Udrims/Menu"));

function Udrims() {
  const isLoggedIn = useRecoilValue(LoginState);
  const [category, setCategory] = useState(1);

  const getCategory = (category) => {
    setCategory(category);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === false) {
      alert("로그인 후 이용해주세요.");
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header getCategory={getCategory} />
      <Container>
        <CategoryContainer>
          <Menu category={category} />
        </CategoryContainer>
      </Container>
    </>
  );
}

export default Udrims;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryContainer = styled.div`
  display: flex;
`;