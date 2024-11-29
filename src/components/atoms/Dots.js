import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 85%;
  justify-content: center;
  z-index: 100;
`;

const ItemDots = styled.span``

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <Container>
      {sliderImage.map((slide, index) => (
        <ItemDots
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
        ></ItemDots>
      ))}
    </Container>
  );
}

export default Dots;
