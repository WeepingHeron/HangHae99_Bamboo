import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <StContainer>
            <StLogo>로고</StLogo>
            <StLogin>로그인</StLogin>
        </StContainer>
    );
};

export default Header;

const StContainer = styled.div`
    border: none;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(119, 17, 17);
`;

const StLogo = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StLogin = styled.div`
    justify-content: right;
    align-items: center;
`