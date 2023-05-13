import styled from "styled-components";
import RadioContext from "./RadioContext";

const RadioGroup = ({ label, children, ...rest }) => {
  return (
    <Fieldset>
      <legend>{label}</legend>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </Fieldset>
  );
};

const Fieldset = styled.fieldset`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 10px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 600;
  font-size: 14px;
`;

export default RadioGroup;
