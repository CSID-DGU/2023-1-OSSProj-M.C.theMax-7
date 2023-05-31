import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dummy from "../../db/ClassDB.json"

const EclassHome = (option) => {
    const options = [
        {value: "ossp", name: "오픈소스프로젝트", professor: "김동호" },
        {value: "comnetwork", name: "컴퓨터네트워킹", professor: "안종석"},
        {value: "analysis", name: "해석개론", professor: "안재욱"},
        {value: "comthinking", name: "계산적 사고법", professor: "손윤식"}
    ];

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return(
        <div>
            <Select className="eclass_name" onChange={handleChange}>
                <option value="disabled selected" > 강의실을 선택하세요</option>
                {option && options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        defaultValue={PaymentResponse.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
            
        </div>
    );
};

const Select = styled.select`
    display: block;
    margin: 1rem;
    width: 20vw;
    height: 5vh;
`;

export default EclassHome;