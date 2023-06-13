import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedValueState } from "../../stores/class-store";

const Classprof = ({ lectures }) => {
  const selectedValue = useRecoilValue(selectedValueState);
  console.log(selectedValue);

  const classlist =
    lectures &&
    lectures.filter((lecture) => lecture.lectureName === selectedValue);

  return (
    <div>
      {classlist &&
        classlist.map((cls) => (
          <Span key={cls.id}>{cls.professor} 교수님</Span>
        ))}
    </div>
  );
};

const Span = styled.div`
  font-size: 1rem;
`;

export default Classprof;
