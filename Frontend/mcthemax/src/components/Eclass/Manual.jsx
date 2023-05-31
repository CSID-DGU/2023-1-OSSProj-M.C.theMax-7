import React from "react";
import styled from "styled-components";
import dummy from "../../db/NotiDB.json";

const Manual = (manual) => {
    console.log(dummy);
    return (
            <Container>
                <Notification> 
                    {/* <ul className="noti_manual">
                        {manual && dummy.notice.map( manual => (
                            <li key={manual.no}> {manual.title}</li>
                        ))}
                    </ul> */}
                </Notification>
                <GoAhead>

                </GoAhead>
            </Container> 
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Notification = styled.div`
    width: 50vw;
    height: 100%;
    font-size: 1rem;
`;

const GoAhead = styled.div``;

export default Manual;