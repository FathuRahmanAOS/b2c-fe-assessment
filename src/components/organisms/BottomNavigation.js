import styled from "styled-components";
import React from "react";
import BottomMenu from "../molecules/BottomMenu";

const Container = styled.div`
  display: flex;
  height: 50px;
  /* width: 80%; */
  background-color: white;
  margin-top: 25px;
  align-items: center;
  padding: 10px 0px 0px 0px;
  border-top: 1px solid #edf1f7;
`;

const BottomNavigation = () => {
  return (
    <Container>
      <BottomMenu />
    </Container>
  );
};

export default BottomNavigation;
