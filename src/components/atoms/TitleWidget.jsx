import React from "react";
import styled from "styled-components";
const Title = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;

const TitleWidget = (props) => {
  return <Title>{props.title}</Title>;
};

export default TitleWidget;
