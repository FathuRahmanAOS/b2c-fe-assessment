import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
// import kuponWidgetImage from "./kuponWidgetImage";
import { Timer } from "@material-ui/icons";
//redux needed
import { useDispatch, useSelector } from "react-redux";
import {
  doGetWidgetRequest,
} from "../../store/widget/actions";

const Container = styled.div`
  height: 60px;
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
  font-size: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #0033a0;
`;

const KuponContainer = styled.div`
  border-radius: 5px;
  padding: 5px;
`;

const KuponImage = styled.img`
  height: 10%;
  width: 100%;
  border-radius: 10px;
`;

const KuponCode = styled.h3`
  font-size: 14px;
`;

const KuponPeriode = styled.h3`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Periode = styled.h3`
  font-size: 10px;
  color: #8e8e93;
`;

const KuponWidget=()=>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    const dispatch = useDispatch();
    const { widgetData } = useSelector((state) => state.widgetState);
  
    useEffect(() => {
      dispatch(doGetWidgetRequest());
    }, []);

    return (
      <Container>
        <LabelContainer>
          <RightLabel>Kupon Diskon Saya</RightLabel>
          <LeftLabel>Lihat Semuanya</LeftLabel>
        </LabelContainer>
        <Slider {...settings}>
          {widgetData[1].KuponWidgetData.map((item) => (
            <KuponContainer>
              <KuponImage src={`/assets/${item.urls}`} />
              <KuponCode>{item.kode}</KuponCode>
              <KuponPeriode>
                <Timer style={{ color: "#0033a0", fontSize: 17 }}/>
                <Periode>Berlaku hingga {item.periode}</Periode>
              </KuponPeriode>
            </KuponContainer>
          ))}
        </Slider>
      </Container>
    );
  }

  export default KuponWidget;
