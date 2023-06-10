import {useRecoilState, useRecoilValue} from "recoil";
import { FeatureState } from "../../../stores/class-store";
import { DarkGray, Orange } from "../../../assets/color/color";
import {FEATURES} from "../../../db/class_feats"
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

export const ExitFeats = () => {

    const [isActive, setIsActive] = useState("");
    const [feature, setFeature] = useRecoilState(FeatureState);

    const changeColor = (e) => {
        setIsActive(() => {
            setFeature(Number(e.target.value) + 1);
            return e.target.value;
        })
        
    }
    useEffect(() => {
        setIsActive(() => {
            return 0;
        });
    }, [feature]);

    return(
        <div>
        {FEATURES && FEATURES.map((feature,index) => (
            <Button 
                key={feature.id}
                value={index}
                className={isActive == index ? "active" : ""}
                onClick={changeColor}
            >
                {feature.name} 
            </Button>
        ))}
        </div>
    );
}

const Button = styled.button`
  background-color: white;
  border: 1px solid ${DarkGray};
  border-right: none;
  font-size: 1rem;
  font-weight: bold;
  color: #437299;
  margin-left: 0.35rem;
  cursor: pointer;
  outline: none;
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