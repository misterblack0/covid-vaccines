import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <main>
      <GlobalStyle />
      <StyledContent>
        {children}
        {/* <Footer /> */}
      </StyledContent>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
