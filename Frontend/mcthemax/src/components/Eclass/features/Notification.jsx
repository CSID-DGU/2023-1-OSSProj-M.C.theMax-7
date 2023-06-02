import styled from "styled-components";

const Notification = () => {
    return(
        <div>
            <Text>공지사항</Text>
        </div>
    );
}

const Text = styled. div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export default Notification;