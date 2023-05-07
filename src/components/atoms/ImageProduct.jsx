import React from "react";
import styled from "styled-components";
import TitleCategory from "../molecules/TitleCategory";

const Container = styled.div`
  width: 100%;
  min-width: 145px;
  aspect-ratio: 1 / 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
`;

const AImageProductItem = styled.img`
  max-width: 100%;
  aspect-ratio: 1 / 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  object-fit: contain;
  width: 100%;
  height: 100%;

  /* overflow-clip-margin: content-box;
    overflow: clip; */
`;

const ImageProduct = (props) => {

  return (
    <Container>
      <AImageProductItem src={props.image} />
    </Container>
  );
};

export default ImageProduct;
