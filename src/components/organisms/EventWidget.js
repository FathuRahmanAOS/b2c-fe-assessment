import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
// import WidgetData from "../WidgetData";

//redux needed
import { useDispatch, useSelector } from "react-redux";
import {
  doGetWidgetRequest,
} from "../../store/widget/actions";

const Container = styled.div`
  height: 60px;
  background-color: white;
  margin-top: 170px;
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
  color: #0033a0;
`;

const ProductContainer = styled.div`
  border-radius: 5px;
  padding: 5px;
`;

const ProductImage = styled.img`
  height: 10%;
  width: 100%;
  border-radius: 10px;
`;

const ProductDesc = styled.h3`
  font-size: 12px;
`;

const PriceContainer = styled.h3`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ProductDiscount = styled.h3`
  font-size: 10px;
  color: white;
  margin-right: 2px;
  background-color: #c2185b;
  border-radius: 2px;
  padding: 1px 1px;
`;

const ProductPrice = styled.h3`
  font-size: 10px;
  text-decoration: line-through;
  color: #8e8e93;
`;

const NettPrice = styled.h3`
  font-size: 14px;
`;

const EventWidget=()=> {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
    const dispatch = useDispatch();
    const { widgetData } = useSelector((state) => state.widgetState);
  
    useEffect(() => {
      dispatch(doGetWidgetRequest());
    }, []);

    // console.log("ini di event widget ", widgetData[2].eventWidgetData);
    
    return (
      <Container>
        <LabelContainer>
          <RightLabel>Kupon Diskon Saya</RightLabel>
          <LeftLabel>Lihat Semuanya</LeftLabel>
        </LabelContainer>
        <Slider {...settings}>
          {widgetData[2].eventWidgetData.map((item) => (
            <ProductContainer>
              <ProductImage src={`/assets/${item.urls}`} />
              <ProductDesc>{item.description}</ProductDesc>
              <PriceContainer>
                <ProductDiscount>{item.discount}%</ProductDiscount>
                <ProductPrice>Rp. {item.hetprice}</ProductPrice>
              </PriceContainer>
              <NettPrice>Rp. {item.nett}</NettPrice>
            </ProductContainer>
          ))}
        </Slider>
      </Container>
    );
  }

  export default EventWidget;
