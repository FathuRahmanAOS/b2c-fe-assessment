import styled from "styled-components";
import React from "react";
import IconMenu from "../molecules/IconMenu";

const Container = styled.div`
  display: flex;
  height: 50px;
  /* width: 80%; */
  background-color: white;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  padding: 10px 0px 0px 0px;
  border-radius: 10px;
  box-shadow: 1px 4px 8px 0 rgba(89, 89, 89, 0.5),
    0 4px 10px 0 rgba(139, 138, 138, 0.126);
  
`;

const IconWidget = () => {
  return (
    <Container>
      <IconMenu/>
    </Container>
  );
};

export default IconWidget;
