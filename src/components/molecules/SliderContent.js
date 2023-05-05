import React, { useEffect, useState } from "react";
import styled from "styled-components";
//redux needed
import { useDispatch, useSelector } from "react-redux";
import { doGetWidgetRequest } from "../../store/widget/actions";

const Container = styled.div`
  height: 40px;
  background-color: white;
  align-items: center;
  padding: 25px 25px;
`;

const LabelContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-items: center;
`;
const RightLabel = styled.h2`
  font-size: 18px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LeftLabel = styled.h2`
  font-size: 14px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 20px;
`

const SliderContent = ({ activeIndex, sliderImage }) => {
  const dispatch = useDispatch();
  const { widgetData } = useSelector((state) => state.widgetState);

  useEffect(() => {
    dispatch(doGetWidgetRequest());
  }, []);
  return (
    <Container>
      <LabelContainer>
        <RightLabel>Promo Bulan Ini</RightLabel>
        <LeftLabel>Lihat Semuanya</LeftLabel>
      </LabelContainer>

      <section>
        {widgetData[3].sliderImageData.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <SlideImage src={`/assets/${slide.urls}`}/>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default SliderContent;
