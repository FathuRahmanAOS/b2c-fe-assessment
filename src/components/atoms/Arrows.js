import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ItemArrow = styled.span`
`;

function Arrows({ prevSlide, nextSlide }) {
  return (
    <Container>
      <ItemArrow className="prev" onClick={prevSlide}>
        &#10094;
      </ItemArrow>
      <ItemArrow className="next" onClick={nextSlide}>
        &#10095;
      </ItemArrow>    

    </Container>
  );
}

export default Arrows;
