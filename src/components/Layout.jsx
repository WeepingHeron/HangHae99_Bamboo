import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
    return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`;