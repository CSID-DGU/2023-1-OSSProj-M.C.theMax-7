import { useContext } from "react";
import RadioContext from "./RadioContext";
import styled from "styled-components";

const Radio = ({ children, value, name, defaultChecked, disabled }) => {
  const group = useContext(RadioContext);
  return (
    <Label>
      <Input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      {children}
    </Label>
  );
};

const Label = styled.label`
  margin: 0 3vw;
`;

const Input = styled.input.attrs({ type: "radio" })`
  &:checked {
    accent-color: black;
  }
  cursor: pointer;
  margin: 0 5px;
`;

export default Radio;
