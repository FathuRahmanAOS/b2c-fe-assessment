import styled from "styled-components";
import React from "react";
import Navbar from "../organisms/Navbar";
import IconWidget from "../organisms/IconWidget";
import BottomNavigation from "../organisms/BottomNavigation";

const Container = styled.div`
  width: 100%;
`;

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 60%;
`;
const IconWidgetContainer = styled.div`
 position: absolute;
  overflow: hidden;
  width: 60%;
  padding-bottom: 30px;
  margin-top: 45px;
  `;

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  overflow: hidden;
  width: 60%;
`;

const FixedContent = () => {
  return (
    <Container>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <IconWidgetContainer>
        <IconWidget />
      </IconWidgetContainer>
      <BottomContainer>
        <BottomNavigation />
      </BottomContainer>
    </Container>
  );
};

export default FixedContent;
