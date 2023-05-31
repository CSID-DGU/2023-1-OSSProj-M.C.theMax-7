import styled from "styled-components";
import { DarkGray, Orange } from "../../assets/color/color";
import { CATEGORIES } from "../../utils/udrims_category";
import { useState } from "react";

const Menu = ({ category }) => {
  const [isActive, setIsActive] = useState("");
  const selectedCategory = CATEGORIES.find(
    (currentCategory) => category === currentCategory.id
  ).subcategories;
  const changeColor = (e) => {
    setIsActive(() => {
      return e.target.value;
    });
  };

  return (
    <Container>
      <MenuContainer>
        {selectedCategory &&
          selectedCategory.map((subcategory, index) => (
            <M
              key={subcategory.subCategoryId}
              value={index}
              className={isActive == index ? "active" : ""}
              onClick={changeColor}
            >
              {subcategory.name}
            </M>
          ))}
      </MenuContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 10vh;
  width: 15vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 10vh;
  height: 90vh;
  border-right: 1px solid #a9a9a9;
`;

const M = styled.button`
  background-color: white;
  border: 1px solid ${DarkGray};
  border-right: none;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  color: ${DarkGray};
  cursor: pointer;
  outline: none;
  text-decoration: none;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px -1px #{rgba(#275efe, 0.32)};
  :not(:last-of-type) {
    border-bottom: none;
  }
  &:hover {
    color: ${Orange};
  }
  &.active {
    color: ${Orange};
  }
`;

export default Menu;
