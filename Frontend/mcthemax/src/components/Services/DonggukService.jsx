import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faCheckToSlot,
  faClipboard,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";
import { Orange } from "../../assets/color/color";

const DonggukService = () => {
  // onClick만 하면 됨
  return (
    <Container>
      <Header>Dongguk Service</Header>
      <Body>
        <Grid>
          <Button>
            <FontAwesomeIcon icon={faLaptopMedical} size="2x" color={Orange} />
          </Button>
          <Text>학사 정보 시스템</Text>
        </Grid>
        <Grid>
          <Button>
            <FontAwesomeIcon icon={faCheckToSlot} size="2x" color={Orange} />
          </Button>
          <Text>수강 신청</Text>
        </Grid>
        <Grid>
          <Button>
            <FontAwesomeIcon icon={faChartColumn} size="2x" color={Orange} />
          </Button>
          <Text>성적 조회</Text>
        </Grid>
        <Grid>
          <Button>
            <FontAwesomeIcon icon={faClipboard} size="2x" color={Orange} />
          </Button>
          <Text>이클래스</Text>
        </Grid>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* border: 1px solid #e6e8e7; */
`;
const Header = styled.div`
  margin: 10px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: bold;
  font-size: large;
`;
const Body = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  height: 100%;
`;
const Grid = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  outline: none;
  border: 1px solid #e6e8e7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  outline: none;
  border: 1px solid #a9a9a9;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const Text = styled.div`
  margin-top: 1rem;
  font-size: small;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export default DonggukService;
