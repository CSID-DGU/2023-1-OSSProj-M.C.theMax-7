import styled from "styled-components";
import { MenuLightGray, Orange } from "../../assets/color/color";
import logo from "../../assets/img/dgu-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { CategoryState, SubCategoryState } from "../../stores/category-store";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState("");
  const [category, setCategory] = useRecoilState(CategoryState);
  const [subcategory, setSubcategory] = useRecoilState(SubCategoryState);
  const navigate = useNavigate();

  const changeColor = () => {
    setIsActive((prev) => {
      return !prev;
    });
  };

  const imgHandler = () => {
    navigate("/");
  };

  return (
    <Container>
      <Img src={logo} alt="dgu-logo" onClick={imgHandler} />
      <SubHeader>
        <UserBar>
          <Button>Password</Button>
          <UserInfo>
            <FontAwesomeIcon icon={faGear} size="sm" color={MenuLightGray} />{" "}
            정원호(2018112039) 님
          </UserInfo>
          <Button>로그아웃</Button>
        </UserBar>
        <NavBar>
          <MenuButton
            className={isActive == 0 ? "active" : ""}
            id="1"
            onClick={() => {
              setCategory(1);
              setSubcategory(1);
              changeColor();
            }}
          >
            원스탑
          </MenuButton>
          <MenuButton
            className={isActive == 1 ? "active" : ""}
            id="2"
            onClick={() => {
              setCategory(2);
              setSubcategory(1);
              changeColor();
            }}
          >
            학사정보
          </MenuButton>
        </NavBar>
      </SubHeader>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  background-color: ${Orange};
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Img = styled.img`
  width: 145px;
  height: 51px;
  margin: 15px;
  cursor: pointer;
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const UserBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

const UserInfo = styled.div`
  margin: 0 20px;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const Button = styled.button`
  margin: 0 20px;
  background-color: ${Orange};
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid ${MenuLightGray};
  border-radius: 5px;
  outline: none;
  text-decoration: none;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px -1px #{rgba(#275efe, 0.32)};
  height: 25px;
  &:hover {
    border-color: white;
  }
`;

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MenuButton = styled.button`
  cursor: pointer;
  background-color: ${Orange};
  border: none;
  color: ${MenuLightGray};
  font-size: 16px;
  font-weight: bold;
  margin: 0 20px;
  &:hover {
    color: white;
  }
  &.active {
    color: white;
  }
`;
