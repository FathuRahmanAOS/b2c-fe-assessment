import React from "react";
import styled from "styled-components";
import ImgIconMenuWidget from "../atoms/ImgIconMenuWidget";

const Container = styled.div``;

const LabelMenu = styled.label`
  color: rgb(97, 97, 97);
  font-size: 9px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
`;

const LabelIconMenuWidget = (props) => {
  return (
    <Container>
      <LabelMenu>{props.name}</LabelMenu>
    </Container>
  );
};

export default LabelIconMenuWidget;
