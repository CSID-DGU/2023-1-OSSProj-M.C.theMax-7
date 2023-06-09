import React, {lazy, useState, useEffect} from "react";
import styled from "styled-components";
import dummy from "../../db/ClassDB";
import { useRecoilState, useRecoilValue } from "recoil";
import { FeatureState } from "../../stores/class-store";
import { ExitFeats } from "./features/ExitFeats";
import { selectedValueState } from "../../stores/class-store";
import axios from 'axios';

const Classprof = lazy(() => import("./class_prof"));

const EclassHome = () => {
    const [selectedValue, setSelectedValue] = useRecoilState(selectedValueState);
    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const [feature, setFeature] = useRecoilState(FeatureState);
    useEffect(() => {
      setFeature(1);
    }, []);

    return(
        <div>          
            <Select className="eclass_name"  onChange={handleSelectChange} value={selectedValue}>
                <option value="" > 강의실을 선택하세요</option>
                {dummy.classes.map((option) => (
                    <option
                        key={option.id}
                        value={option.name}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>

            <Header>  {selectedValue} <Classprof name={selectedValue}/>  </Header>
            <Container>
                <ExitFeats name={selectedValue}/>
            </Container>    
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



export default EclassHome;