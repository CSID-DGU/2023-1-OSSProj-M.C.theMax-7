import React, {lazy, useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dummy from "../../db/ClassDB.json";
import dum from "../../db/MAIN_DATA.json"
// import { Link } from "react-router-dom";

const Assignment = lazy(() => import("./features/Assignment"));
const Attendance = lazy(() => import("./features/Attendance"));
const Notification = lazy(() => import("./features/Notification"));
const Score = lazy(() => import("./features/Score"));
const Classprof = lazy(() => import("./class_prof"));

const EclassHome = () => {
    
    const [content, setContent] = useState();
    const [classes, setClasses] = useState("origin");
    const handleChange = (e) => {
        console.log(e.target.value);
        setClasses(e.target.value);
    };
    const handleClickButton = (e) => {
        const {name} = e.target;
        setContent(name);
    };
    const selectComponent = {
        first: <Assignment name={classes} />,
        second: <Notification name={classes} />,
        third: <Attendance name={classes} />,
        fourth: <Score name={classes} />
    }

    return(
        <div>          
            <Select className="eclass_name"  onChange={handleChange} value={classes}>
                <option value="origin" > 강의실을 선택하세요</option>
                {dummy.classes.map((option) => (
                    <option
                        key={option.id}
                        value={option.name}
                        // 새로고침 후 reset 안하게끔 하려면
                        // defaultValue={option.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
            <Header> {classes} | <Classprof name={classes}/> </Header>
            <Container>
                {dum.MAIN_DATA.map(data => {
                    return(
                        <Button onClick={handleClickButton} name={data.name} key={data.id}>
                            {data.text}
                        </Button>
                    );
                })}
            </Container>
            {content && <Content>{selectComponent[content]}</Content>}
        </div>
    );
};

const Select = styled.select`
  display: block;
  margin: 1rem;
  width: 17vw;
  height: 5vh;
  border-radius: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 1rem;
  width: 20vw;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  border: 1px solid gray;
  padding: 10px;
  border-radius: 0.5rem;

`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  height: 6vh;
  width: 30vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0rem 2.5rem;
  width: 67vw;
  height: 60vh;
  border: 1px solid black;
`;
const Button = styled.button`
  width: 90px;
  margin-left: 0.35rem;
  color: #FBF8EF;
  background-color: #FAAC58;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #FF8000;
`;


export default EclassHome;