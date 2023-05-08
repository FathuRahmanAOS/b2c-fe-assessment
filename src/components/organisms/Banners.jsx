import React, { useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Container = styled.div`
  /* width: 50%; */
`;

const CarouselContainer = styled.div`
  background: white;
  margin: 10px 17px 0px;
`;
const ImageContainer = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Banners = (props) => {
  return (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        autoFocus={false}
        showArrows={false}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={80}
      >
        {(props.banner.detail.banners || []).map((item) => (
          <CarouselContainer>
            <ImageContainer src={item.image} />
            {/* <p className="legend">Legend 1</p> */}
          </CarouselContainer>
        ))}
      </Carousel>
    </Container>
  );
};

export default Banners;
