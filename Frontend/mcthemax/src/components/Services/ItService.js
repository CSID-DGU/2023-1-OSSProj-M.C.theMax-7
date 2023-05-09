import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCheckToSlot,
  faLaptopMedical,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import { Orange } from "../../assets/color/color";

const ItService = () => {
  return (
    <Container>
      <Header>IT Service</Header>
      <Body>
        <Grid>
          <Button>
            <FontAwesomeIcon icon={faEnvelope} size="2x" color={Orange} />
          </Button>
          <Text>웹 메일</Text>
        </Grid>
        <Grid>
          <Button>
            <FontAwesomeIcon icon={faFileInvoice} size="2x" color={Orange} />
          </Button>
          <Text>인터넷 증명서</Text>
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
  border: 1px solid #e6e8e7;
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
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 30px;
`;
const Grid = styled.div`
  width: 10vw;
  height: 10vw;
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
  width: 50px;
  height: 50px;
`;

const Text = styled.div`
  margin-top: 1rem;
  font-size: small;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export default ItService;
