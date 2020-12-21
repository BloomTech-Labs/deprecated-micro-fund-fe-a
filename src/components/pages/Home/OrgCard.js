import React from "react";
import styled from "styled-components";


const StyledCardCont = styled.div`
width: 100%;
text-align: center;
`;

const StyledButton = styled.button`
background-color: #2C88D9;
border-radius: 4px;
float: right;
margin-bottom: 1rem;
margin-right: 1rem;
`;


const OrgCard = props => {
    return (
        <div>
            <StyledCardCont>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <StyledButton>Apply</StyledButton>
            </StyledCardCont>
        </div>
    );
};

export default OrgCard;