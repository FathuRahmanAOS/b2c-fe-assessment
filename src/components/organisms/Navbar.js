import styled from "styled-components";
import React from "react";
import Searchbar from "../molecules/Searchbar";
import Menubar from "../molecules/Menubar";

const Container = styled.div`
  display: flex;
  height: 50px;
  /* width: 80%; */
  background-color: #0033a0;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Searchbar />
      </Left>
      <Right>
        <Menubar />
      </Right>
    </Container>
  );
};

export default Navbar;
