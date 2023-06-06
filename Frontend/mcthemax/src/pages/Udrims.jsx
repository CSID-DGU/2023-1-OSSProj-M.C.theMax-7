import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { LoginState } from "../stores/login-store";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { lazy } from "react";
import { CategoryState, SubCategoryState } from "../stores/category-store";
import { AppNexus } from "../components/Udrims/contents/AppNexus";

const Header = lazy(() => import("../components/Udrims/Header"));
const Menu = lazy(() => import("../components/Udrims/Menu"));

function Udrims() {
  const isLoggedIn = useRecoilValue(LoginState);
  const [category, setCategory] = useRecoilState(CategoryState);
  const [subcategory, setSubcategory] = useRecoilState(SubCategoryState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === false) {
      alert("로그인 후 이용해주세요.");
      navigate("/");
    }
    setCategory(1);
    setSubcategory(1);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CategoryContainer>
          <Menu />
          {/* 카테고리 상태에 따라 컴포넌트 출력 */}
          <AppNexus />
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
