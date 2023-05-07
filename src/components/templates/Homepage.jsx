import React, { useEffect, useState } from "react";
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
//redux needed
import { useDispatch, useSelector } from "react-redux";
import { doGetWidgetRequest } from "../../store/widget/actions";

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

const Homepage = () => {
  const dispatch = useDispatch();
  const { cupon, event_product, shortcut,promo } = useSelector(
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
            {/* ==================HEADER================== */}
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <SectionContainerAgain>
              {/* =========================ICON MENU================== */}
              <IconMenuContainer>
                {(shortcut || []).map((item) => (
                  <IconMenuWidget menu={item} />
                ))}
              </IconMenuContainer>
              <SectionContainerAgain12></SectionContainerAgain12>
              <SectionContainerAgain13></SectionContainerAgain13>
              {/* =====================PICTURE SLIDER=========================== */}
              {/* <SectionContainerAgain14>
                <SpanContainer>
                  <SpanPromo>Promo Bulan Ini</SpanPromo>
                </SpanContainer>
                <SpanContainer1>Lihat Semua</SpanContainer1>
              </SectionContainerAgain14> */}
            </SectionContainerAgain>
            {/* <SectionCarousel>
              <CarouselSlider>
                <UlContainer>
                  <LiContainer
                    value="0"
                    role="button"
                    aria-label="slide item 1"
                  ></LiContainer>
                  <LiContainer
                    value="1"
                    role="button"
                    aria-label="slide item 2"
                  ></LiContainer>
                  <LiContainer
                    value="2"
                    role="button"
                    aria-label="slide item 3"
                  ></LiContainer>
                  <LiContainer
                    value="3"
                    role="button"
                    aria-label="slide item 4"
                  ></LiContainer>
                  <LiContainer
                    value="4"
                    role="button"
                    aria-label="slide item 5"
                  ></LiContainer>
                  <LiContainer
                    value="5"
                    role="button"
                    aria-label="slide item 6"
                  ></LiContainer>
                  <LiContainer
                    value="6"
                    role="button"
                    aria-label="slide item 7"
                  ></LiContainer>
                  <LiContainer
                    value="7"
                    role="button"
                    aria-label="slide item 8"
                  ></LiContainer>
                  <LiContainer
                    value="8"
                    role="button"
                    aria-label="slide item 9"
                  ></LiContainer>
                </UlContainer>
                <ButtonContainer
                  type="button"
                  aria-label="previous slide / item"
                ></ButtonContainer>
                <SliderHorizontal>
                  <UlContainer1>
                    <LiContainer1>
                      <ImgContainer>
                        <ImageSlider src="https://astraotoshop.com/asset/2023/05/05/16834087-3d2b-45a5-92dc-7b42c56ca6ad+51ceb1cb+6ae8+4a24+b586+4e5a4b1759f9+gs+astra+5.webp" />
                      </ImgContainer>
                    </LiContainer1>
                  </UlContainer1>
                </SliderHorizontal>
              </CarouselSlider>
            </SectionCarousel> */}
            {/* ==========================SECTION PRODUCT 1================================= */}
            {/* <SectionProductCategory>
            {(promo || []).map((item) => (
              <ProductCategory promo = {item}/>
              ))}
            </SectionProductCategory> */}
            {/* ==========================SECTION COUPON==================================== */}
            <Coupon cupon={cupon} />
            {/* =============================SECTION PRODUCTS============================ */}
            {(event_product || []).map((item) => (
              <ProductWidget products={item} />
            ))}
            {/* ==============================SECTION EMAIL========================== */}
            <EmailPromo />
            {/* ================================SECTION DESCRIPTION WEBSITE======================= */}
            <WebDescription />
            {/* ================================SECTION METODE PEMBAYARAN====================== */}
            <PaymentMethod />
            {/* ================================SECTION METODE PEMBAYARAN====================== */}

            <WebAdvantages />
            {/* ===================================OTHERSSECTION==================== */}
            <OthersSection />
            {/* ===================================ENDSECTION==================== */}
            <EndSection />
            {/* ===========================BOTTOMNAVIGATION================================== */}
            <BottomNavigationContainer />
          </SectionContainer>
        </MainContainer1>
      </MainContainer>
    </Container>
  );
};

export default Homepage;
