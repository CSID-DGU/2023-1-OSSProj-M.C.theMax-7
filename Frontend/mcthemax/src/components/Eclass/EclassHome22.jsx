import React, {lazy, useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dummy from "../../db/ClassDB";
import dum from "../../db/MAIN_DATA.json"
import axios from 'axios';
import { useEffect } from "react";

const Assignment = lazy(() => import("./features/Assignment"));
const Attendance = lazy(() => import("./features/Attendance"));
const Notification = lazy(() => import("./features/Notification"));
const Score = lazy(() => import("./features/Score"));
const Classprof = lazy(() => import("./class_prof"));

const EclassHome = () => {
    // option값을 백엔드데이터 상태에 따라 바뀜
    // const [options, setOptions] = useState([]);

    //selectbox에서 selected value 상태설정
    const [classes, setClasses] = useState("강의실을 선택하세요");
    const handleChange = (e) => {
        // console.log(e.target.value);
        setClasses(e.target.value);
    };

    //click한 상태 구분
    // body에 들어갈 내용값들이 selectedvlaue에 따라 변화
    const [content, setContent] = useState();
    const [buttonStates, setButtonStates] = useState([false, false, false, false]);
    const handleClickButton = (e) => {
        const {name} = e.target;
        // console.log(classes);
        setContent(name);
        // const newButtonStates = [...buttonStates];
        // newButtonStates[index] = !newButtonStates[index];
        // setButtonStates(newButtonStates);
    };
// index를 넣어서 슬라이싱할 수 있게끔
    const selectComponent = {
        first: <Assignment name={classes} />,
        second: <Notification name={classes} />,
        third: <Attendance name={classes} />,
        fourth: <Score name={classes} />
    }

    // 백엔드 서버통신
    // useEffect(() => {
    //     fetchOptions();
    // }, []);

    // const fetchOptions = async () => {
    //     try{
    //         const response = await axios.get("API주소");
    //         setOptions(response.data);
    //     }catch(error) {
    //         console.error('데이터를 불러오지 못했습니다.', error);
    //     }
    // };

    return(
        <div>          
            <Select className="eclass_name"  onChange={handleChange} value={classes}>
                <option value="강의실을 선택하세요" > 강의실을 선택하세요</option>
                {dummy.classes.map((option) => (
                    <option
                        key={option.id}
                        value={option.name}
                        // 새로고침 후 reset 안하게끔 하려면
                        //defaultValue={option.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
            {/* <select value={selectedValue} onChange={handleSelectChange}>
                    <option value=""> 강의실을 선택하세요 </option>
                    {options.map((option) > (
                       <option key={option.id} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                // 단 받아오는 데이터 구조에 따라 'option.id', 'option.value' 등으로 알맞게 수정
            */}

            <Header>  {classes} <Classprof name={classes}/>  </Header>
            {/* 각각의 공지사항, 과제, 출석 등의 버튼을 'id' 값으로 인식하여 컴포넌트 전환시키기 */}
            <Container>
                {dum.MAIN_DATA.map(data => {
                    return(
                        <Button onClick={handleClickButton} name={data.name} key={data.id}>
                            {data.text}
                        </Button>
                    );
                })}

                {/* <Button clicked={buttonStates[0]} onClick={() => handleClickButton(0)} name="first"> 과제</Button>
                <Button clicked={buttonStates[1]} onClick={() => handleClickButton(1)} name="second"> 공지사항</Button>
                <Button clicked={buttonStates[2]} onClick={() => handleClickButton(2)} name="third"> 출석부</Button>
                <Button clicked={buttonStates[3]} onClick={() => handleClickButton(3)} name="fourth"> 성적</Button> */}
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
  background-color: ${props => props.clicked ? '#437299' : '#FAAC58'};
  color: ${props => props.clicked ? '#437299' : '#FBF8EF'};
  width: 90px;
  margin-left: 0.35rem;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #FF8000;
  cursor: pointer;
`;


export default EclassHome;