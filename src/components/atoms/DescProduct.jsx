import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  flex: 1 1 0%;
  margin-top: 12px;
`;

const SpanDescProductItem = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(70, 70, 70);
  font-size: 12px;
  line-height: 14px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const DescProduct = (props) => {
  return (
    <Container>
      <SpanDescProductItem>
        {props.name}
      </SpanDescProductItem>
    </Container>
  );
};

export default DescProduct;
