import React, { useEffect, useState, Component } from "react";
import Header from "../organisms/Header";
import styled from "styled-components";
import IconMenuWidget from "../organisms/IconMenuWidget";
import ProductCategory from "../organisms/ProductCategory";
import Coupon from "../organisms/Coupon";
import ProductWidget from "../organisms/ProductWidget";
import EmailPromo from "../organisms/EmailPromo";
import WebDescription from "../organisms/WebDescription";
import PaymentMethod from "../organisms/PaymentMethod";
import WebAdvantages from "../organisms/WebAdvantages";
import OthersSection from "../organisms/OthersSection";
import EndSection from "../organisms/EndSection";
import BottomNavigationContainer from "../organisms/BottomNavigationContainer";
import TitleWidgetContainer from "../molecules/TitleWidgetContainer";

//redux needed
import { useDispatch, useSelector } from "react-redux";
import { doGetWidgetRequest } from "../../store/widget/actions";
import Banners from "../organisms/Banners";

const Container = styled.div`
  background-color: #efefef !important;
  margin: 0px;
`;

const MainContainer = styled.div`
  overflow: hidden;
  width: 740px;
  margin: 0 auto;
  background-color: #fff !important;
  height: 100%;
  min-height: 100vh;
`;

const MainContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`;

const SectionContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  max-width: 1100px;
`;

const SectionCarousel = styled.div`
  outline: none;
  margin-bottom: 15px;
`;

const CarouselSlider = styled.div`
  position: relative;
  margin: 0;
  overflow: hidden;
  width: 100%;
`;

const UlContainer = styled.ul`
  position: absolute;
  bottom: 0;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  width: 100%;
  z-index: 1;
`;

const LiContainer = styled.li`
  transition: opacity 0.25s ease-in;
  opacity: 0.3;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
  background: #fff;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  cursor: pointer;
  display: inline-block;
  margin: 0 8px;
`;

const ButtonContainer = styled.button`
  top: 0;
  color: #fff;
  font-size: 26px;
  bottom: 0;
  margin-top: 0;
  padding: 5px;
`;

const SliderHorizontal = styled.div`
  overflow: hidden;
  margin: auto;
  width: 100%;
  -webkit-transition: height 0.15s ease-in;
  -moz-transition: height 0.15s ease-in;
  -ms-transition: height 0.15s ease-in;
  -o-transition: height 0.15s ease-in;
  transition: height 0.15s ease-in;
`;

const UlContainer1 = styled.ul`
  transform: translate3d(-985%, 0px, 0px);
  transition-duration: 350ms;
`;
const LiContainer1 = styled.li`
  margin: 0;
  position: relative;
  text-align: center;
`;

const HeaderContainer = styled.header`
  /* width: 707px !important; */
  /* position: fixed; */
  position: fixed;
  top: 0px;
  width: 740px !important;
  z-index: 2;
`;

const SectionContainerAgain = styled.section`
  margin: 5rem auto 0px;
  padding-bottom: 12px;
`;

const IconMenuContainer = styled.div``;

const SectionContainerAgain12 = styled.div`
  height: 90px;
`;
const SectionContainerAgain13 = styled.div`
  height: 12px;
`;

const SectionProductCategory = styled.div`
  background: rgb(249, 249, 249);
  margin-top: 10px;
  padding: 18px 0px 0px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SectionContainerAgain14 = styled.div`
  margin: 0px 17px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const SpanContainer = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;

const ImgContainer = styled.div`
  background: white;
  box-shadow: rgba(140, 140, 140, 0.07) 0px 3px 10px;
  margin: 10px 17px 0px;
  width: 95%;
`;

const ImageSlider = styled.img`
  background: white;
  box-shadow: rgba(140, 140, 140, 0.07) 0px 3px 10px;
  margin: 10px 17px 0px;
  width: 95%;
`;

const Homepage = () => {
  const dispatch = useDispatch();
  const { cupon, event_product, shortcut, promo, banner } = useSelector(
    (state) => state.widgetState
  );

  useEffect(() => {
    dispatch(doGetWidgetRequest());
  }, []);

  return (
    <Container>
      <MainContainer>
        <MainContainer1>
          <SectionContainer>
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <SectionContainerAgain>
              <IconMenuContainer>
                {(shortcut || []).map((item) => (
                  <IconMenuWidget menu={item} />
                ))}
              </IconMenuContainer>
              <SectionContainerAgain12></SectionContainerAgain12>
              <SectionContainerAgain13></SectionContainerAgain13>
            </SectionContainerAgain>
            {/* =====================PICTURE SLIDER=========================== */}
            <TitleWidgetContainer title={"Promo Bulan ini"} />

           
            {(banner || []).map((item) => (
              <Banners banner={item}/>
            ))}

            {/* ==========================SECTION PRODUCT 1================================= */}
            {/* <SectionProductCategory>
            {(promo || []).map((item) => (
              <ProductCategory promo = {item}/>
              ))}
            </SectionProductCategory> */}
            <Coupon cupon={cupon} />
            {(event_product || []).map((item) => (
              <ProductWidget products={item} />
            ))}
            <EmailPromo />
            <WebDescription />
            <PaymentMethod />
            <WebAdvantages />
            <OthersSection />
            <EndSection />
            <BottomNavigationContainer />
          </SectionContainer>
        </MainContainer1>
      </MainContainer>
    </Container>
  );
};

export default Homepage;
