import React from "react";
import Header from "../../components/templates/Header";
// import RelativeContent from "../../components/templates/RelativeContent";
import styled from "styled-components";

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

const SectionContainerAgain11 = styled.div`
  background: rgb(252, 252, 252);
  margin: 12px 17px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 10px;
  position: fixed;
  z-index: 2;
  border-radius: 8px;
  padding: 18px 10px 11px;
  width: 685px !important;
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`;
const IconMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  width: 14%;

  cursor: pointer;
`;

const IconMenu = styled.div``;
const LabelMenu = styled.label`
  color: rgb(97, 97, 97);
  font-size: 9px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin: 0px;
`;

const SectionContainerAgain12 = styled.div`
  height: 90px;
`;
const SectionContainerAgain13 = styled.div`
  height: 12px;
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
const SpanPromo = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  /* width: 75%; */
`;
const SpanContainer = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;
const SpanContainer1 = styled.span`
  text-decoration: none;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  font-weight: 700;
  color: rgb(49, 49, 49);
  cursor: pointer;
  font-size: 12px !important;
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

const SectionSliderProduct = styled.div`
  background: rgb(249, 249, 249);
  margin-top: 10px;
  padding: 18px 0px 0px;

  display: flex;
  flex-direction: column;
  position: relative;
`;

const SectionTitle = styled.div`
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

const SectionProduct = styled.div`
  overflow: auto;

  display: flex;
  flex-direction: row;
  position: relative;
  padding: 10px 0px 18px;
`;

const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
const ButtonTitle = styled.button`
  background-color: rgb(0, 51, 160);
  color: rgb(255, 255, 255);
  border: 2px solid rgb(0, 51, 160);
  border-radius: 4px;
  font-size: 11px;
  margin-right: 10px;

  display: inline-flex;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  /* font-size: 1rem; */
  /* border: 0.0625em solid transparent; */
  height: 2em;
  -webkit-box-pack: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  padding: 0px 1em;
  /* border-radius: 0.125em; */
  box-sizing: border-box;
  pointer-events: auto;
  transition: background-color 250ms ease-out 0s, color 250ms ease-out 0s,
    border-color 250ms ease-out 0s;
  /* background-color: rgb(33, 150, 243);
    color: rgb(255, 255, 255); */
`;
const SpanLihatSemua = styled.span`
  text-decoration: none;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  font-weight: 700;
  color: rgb(0, 51, 160);
  cursor: pointer;
  font-size: 12px !important;
`;

const SectionProducts = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 10px 0px 18px;

  overflow: auto;
`;

const DivProductItem = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 10px;
  border-radius: 4px;
  text-align: left;
  max-width: 145px;
  margin-left: 17px;
`;

const AProductItem = styled.a`
  text-decoration: none;
`;

const DivImageProduct = styled.div`
  width: 100%;
  min-width: 145px;
  aspect-ratio: 1 / 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
`;

const DivContainerProductItem = styled.div`
  display: flex;
  /* flex-direction: row; */
  position: relative;

  flex-direction: column;
  padding: 10px;
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
const DivDescProductItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  flex: 1 1 0%;
  margin-top: 12px;
`;
const DivSpace = styled.div`
  height: 10px;
`;
const DivDicountHetProductItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
`;
const DivNettRatingProductItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0px 0px 5px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const DivContainerSpace = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
`;
const DivSpace1 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
`;
const DivSpace2 = styled.div`
  height: 5px;
`;
const DivSpace3 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
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

const SpanDiscountProductItem = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  font-size: 0.5rem;
  line-height: 1.5em;
  padding: 0.1em 0.3em;
  color: rgb(255, 255, 255);
  background-color: rgb(194, 24, 91);
  border-radius: 2px;
  height: unset;
`;
const DivSpaceDiscountProductItem = styled.div`
  width: 4px;
`;
const LabelDiscountProductItem = styled.label`
  font-size: 10px;
  line-height: 14px;
  text-decoration-line: line-through;
  color: rgb(0, 0, 0);
  mix-blend-mode: normal;
  opacity: 0.4;
`;

const SpanNett = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(70, 70, 70);
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
`;
const DivRating = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: flex-end;
`;
const SpanIconRating = styled.span`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0.75rem;
  color: currentcolor;
  margin: 0.1em;
  height: 12px;
  box-sizing: border-box;
`;
const SpanValueRating = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 8px;
  font-weight: bold;
  line-height: 10px;
  margin: 0px 0px 0px 2px;
`;

const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin: 10px 0px 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0px 17px;
  cursor: pointer;
`;

const CouponItems = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 10px 0px 0px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const DivCouponTitle = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 75%;
`;

const SpanCouponTitle = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;
const SpanCouponLihatSemua = styled.span`
  text-decoration: none;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  font-weight: 700;
  color: rgb(0, 51, 160);
  cursor: pointer;
  font-size: 12px !important;
`;

const CouponItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin-right: 10px !important;
  width: 220px;
  margin-left: 17px;
`;

const ImageCoupon = styled.img`
  border-radius: 4px;
  margin-bottom: 5px;
  background-color: rgb(221, 221, 221);
`;

const SpanCodeCoupon = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 12px;
  line-height: 18px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const CouponPeriodContainer = styled.span`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
`;

const CouponPeriodIcon = styled.span`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0.625rem;
  fill: rgb(112, 157, 255);
  margin: 0.1em;
  height: 10px;
  width: 10px;
  box-sizing: border-box;
`;
const CouponPeriode = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(167, 167, 167);
  font-size: 10px;
`;

const DivSectionSpace = styled.div`
  height: 15px;
`;

const DivSliderProducts = styled.div`
  background-image: url(https://astraotoshop.com/asset/undefined5978017f-4444-4cd4-b118-808d105ac362+etalase+sparepart_20230329.webp);
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgb(9, 32, 83);
  margin-top: 15px;
`;

const DivScrollIndianaContainer = styled.div`
  overflow: auto;
  display: flex;
  padding: 10px 0px;
`;

const DivSliderProduct = styled.div`
  margin-left: 160px;
  display: flex;
  flex-direction: row;
`;

const EmailPromo = styled.div`
  background-image: url(https://astraotoshop.com/590c4dfbf055b5bbffc269fb7f3360eb.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgb(1, 92, 163);
  padding: 60px 0px 10px 17px;
  position: relative;
`;

const EmailPromoDesc = styled.div`
  flex-direction: row;
  position: relative;
  margin: 0px 0px 15px;
  width: 70.8333%;
`;

const EmailDesc = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 18px;
`;

const EmailDescAstraotoshop = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  font-weight: bold;
`;

const InputEmailPromo = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0px 0px 17px;
  -webkit-box-align: center;
  align-items: center;

  align-items: flex-start;
`;

const EmailPromoDesc1 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 75%;
`;

const EmailDesc1 = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(255, 255, 255);
  font-size: 8px;
  line-height: 12px;
`;

const InputEmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 75%;

  margin-right: 11px !important;
`;
const InputEmailContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
const InputEmailContainer2 = styled.div`
  position: relative;
  background: white;
  border-radius: 7.56px;
  padding: 5px 10px;
  height: 40px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;
const InputEmail = styled.input`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  display: block;
  width: 100%;
  margin: 0px;
  box-sizing: border-box;
  padding: 0px 0.444444em;
  height: 2.22222em;
  font-weight: 500;
  border-radius: 2px;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgb(97, 97, 97);
  font-size: 12px;
`;

const ButtonEmailContainer = styled.div`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  margin-right: 0px !important;

  display: flex;
  flex-direction: row;
  position: relative;
`;

const ButtonEmail = styled.button`
  display: inline-flex;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
  border: 0.0625em solid transparent;
  height: 3em;
  -webkit-box-pack: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  padding: 0px 1.5em;

  box-sizing: border-box;
  pointer-events: auto;

  background: rgb(254, 217, 0);
  border-radius: 4px;
  color: rgb(0, 64, 165);
  /* transition: background-color 250ms ease-out 0s, color 250ms ease-out 0s, border-color 250ms ease-out 0s; */
  /* background-color: rgb(33, 150, 243); */
  /* color: rgb(255, 255, 255);*/
`;

const WebDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 17px;
`;
const TitleWebDescContainer = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  margin-bottom: 10px !important;
`;
const WebDescriptionContainer = styled.div`
  background: rgb(255, 255, 255);
  position: relative;
  height: 110px;
  overflow: hidden;

  ::after {
    width: 100%;
    height: 110px;
    position: absolute;
    top: 0px;
    left: 0px;
    content: close-quote;
  }

  margin-bottom: 10px !important;
`;
const WebDescSpan = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(0, 51, 160);
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
`;

const WebLongDescSpan = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(97, 97, 97);
  font-size: 13px;
  line-height: 18px;

  overflow: auto;
  /* height: 100%; */
`;

const PaymentContainer = styled.div`
  margin: 20px 0px 44px;
`;
const TitlePaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  margin: 0px 17px;
  cursor: pointer;
`;
const TitlePayment = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 75%;
`;
const TitlePayment1 = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;
const ImagePaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  display: -webkit-box;
  overflow: auto;
  margin-top: 15px;
`;

const ImagePayment = styled.div`
  background: url(https://astraotoshop.com/asset/payment/2021/09/13/Frame%2031.png)
    center center / contain no-repeat rgb(252, 252, 252);
  border-radius: 4px;
  height: 55px;
  width: 15%;
  margin: 0px;
`;

const WebAdvantageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 17px;
`;
const WebAdvantage = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;
const ListWebAdvantage = styled.div``;
const ListAdvantage = styled.p`
  font-family: Helvetica Neue, Helvetica, Roboto, sans-serif;
  color: #434343;
  font-size: 14px;
  line-height: 18px;
`;
const ImgAdvantage = styled.img`
  width: 166px;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

const OthersContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 17px;
`;
const OtherContainer = styled.a`
  text-decoration: none;
  border-top: 1px solid rgb(243, 244, 245);
`;
const ItemOtherContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 10px 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const LabelOtherContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;
const LabelOther = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(59, 59, 59);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 19px;
`;
const IconOtherContainer = styled.span`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.25rem;
  color: currentcolor;
  margin: 0.1em;
  height: 20px;
  box-sizing: border-box;
`;

const EndSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 3px 17px 23px;
  background-color: rgb(255, 255, 255);
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
const LabelEndSection = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(157, 157, 157);
  font-size: 11px;
  line-height: 18px;
`;

const BottomNavigationContainer = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 1.5rem 0px;
`;
const BottomItemsContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 740px;
  margin: auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  bottom: 0px;
  background-color: white;
  z-index: 1;
  height: 64px;
  border-top: 1px solid rgb(235, 235, 235);
`;
const BottomItemContainer = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  /* background-color: rgb(217, 229, 239) !important; */
  color: rgb(64, 120, 165) !important;
`;
const IconBottomNavigation = styled.span`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.4375rem;
  color: currentcolor;
  margin: 0.1em;
  height: 23px;
  box-sizing: border-box;
`;
const LabelBottomNavigation = styled.p`
  margin-top: 5px;
  font-size: 10.3px;
  margin-bottom: 0px;
  font-family: arial, sans-serif;
  color: rgb(142, 142, 147);
`;

const LandingPage = () => {
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
              <SectionContainerAgain11>
                <IconMenuContainer>
                  <IconMenu>
                    <Image src="https://astraotoshop.com/asset/aop/layanan bengkel.png" />
                  </IconMenu>
                  <LabelMenu>Layanan Bengkel</LabelMenu>
                </IconMenuContainer>
                <IconMenuContainer>
                  <IconMenu>
                    <Image src="https://astraotoshop.com/asset/aop/home%20servis.png" />
                  </IconMenu>
                  <LabelMenu>Home Service</LabelMenu>
                </IconMenuContainer>
                <IconMenuContainer>
                  <IconMenu>
                    <Image src="https://astraotoshop.com/asset/aop/suku cadang.png" />
                  </IconMenu>
                  <LabelMenu>Suku Cadang</LabelMenu>
                </IconMenuContainer>
                <IconMenuContainer>
                  <IconMenu>
                    <Image src="https://astraotoshop.com/asset/2022/09/09/1d264eaf-e26b-4a97-8d11-fcc81f4516be+astra+otopower.webp" />
                  </IconMenu>
                  <LabelMenu>Astra Otopower</LabelMenu>
                </IconMenuContainer>
                <IconMenuContainer>
                  <IconMenu>
                    <Image src="https://astraotoshop.com/asset/aop/lainnya.png" />
                  </IconMenu>
                  <LabelMenu>Lainnya</LabelMenu>
                </IconMenuContainer>
              </SectionContainerAgain11>
              <SectionContainerAgain12></SectionContainerAgain12>
              <SectionContainerAgain13></SectionContainerAgain13>
              {/* =====================PICTURE SLIDER=========================== */}
              <SectionContainerAgain14>
                <SpanContainer>
                  <SpanPromo>Promo Bulan Ini</SpanPromo>
                </SpanContainer>
                <SpanContainer1>Lihat Semua</SpanContainer1>
              </SectionContainerAgain14>
            </SectionContainerAgain>
            <SectionCarousel>
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
            </SectionCarousel>
            {/* ==========================SECTION PRODUCT 1================================= */}
            <SectionSliderProduct>
              <SectionTitle>
                <DivTitle>
                  <ButtonTitle>Promo</ButtonTitle>
                  <ButtonTitle>Terbaru</ButtonTitle>
                  <ButtonTitle>Terlaris</ButtonTitle>
                </DivTitle>
                <SpanLihatSemua>Lihat Semua</SpanLihatSemua>
              </SectionTitle>
              <SectionProducts>
                <SectionProduct>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                </SectionProduct>
              </SectionProducts>
            </SectionSliderProduct>
            {/* ==========================SECTION COUPON==================================== */}
            <CouponContainer>
              <TitleContainer>
                <DivCouponTitle>
                  <SpanCouponTitle>Kupon diskon saya</SpanCouponTitle>
                </DivCouponTitle>
                <SpanCouponLihatSemua>Lihat Semua</SpanCouponLihatSemua>
              </TitleContainer>
              <CouponItems>
                <CouponItem>
                  <ImageCoupon src="https://astraotoshop.com/asset/coupon/GL/harbolnas/75.jpg" />
                  <SpanCodeCoupon>HARBOLNAS75</SpanCodeCoupon>
                  <CouponPeriodContainer>
                    <CouponPeriodIcon>
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 9 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.12589 1.12275L5.79004 1.70391L6.95378 2.37563L7.28965 1.79445C7.38215 1.63313 7.32707 1.42844 7.16636 1.33523L6.5852 0.999367C6.42442 0.906263 6.21911 0.961344 6.12589 1.12275Z"></path>
                        <path d="M4.06251 1.51242C4.27493 1.51242 4.48243 1.5332 4.68751 1.5625V1.01891L5.1172 1.01562V0.3125C5.1172 0.139771 4.97743 0 4.8047 0H3.32361C3.15088 0 3.01111 0.139771 3.01111 0.3125V1.01562L3.43751 1.01891V1.5625C3.6426 1.5332 3.8501 1.51242 4.06251 1.51242Z"></path>
                        <path d="M4.0625 1.875C1.81884 1.875 0 3.69382 0 5.9375C0 8.18118 1.81884 10 4.0625 10C6.30616 10 8.125 8.18118 8.125 5.9375C8.125 3.69382 6.30616 1.875 4.0625 1.875ZM5.96095 7.84688L3.59374 6.20806V3.89444H4.27688V5.85015L6.34976 7.28523L5.96095 7.84688Z"></path>
                      </svg>
                    </CouponPeriodIcon>
                    <CouponPeriode>Berlaku hingga 07 Mei 2023</CouponPeriode>
                  </CouponPeriodContainer>
                </CouponItem>
                <CouponItem>
                  <ImageCoupon src="https://astraotoshop.com/asset/coupon/GL/harbolnas/75.jpg" />
                  <SpanCodeCoupon>HARBOLNAS75</SpanCodeCoupon>
                  <CouponPeriodContainer>
                    <CouponPeriodIcon>
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 9 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.12589 1.12275L5.79004 1.70391L6.95378 2.37563L7.28965 1.79445C7.38215 1.63313 7.32707 1.42844 7.16636 1.33523L6.5852 0.999367C6.42442 0.906263 6.21911 0.961344 6.12589 1.12275Z"></path>
                        <path d="M4.06251 1.51242C4.27493 1.51242 4.48243 1.5332 4.68751 1.5625V1.01891L5.1172 1.01562V0.3125C5.1172 0.139771 4.97743 0 4.8047 0H3.32361C3.15088 0 3.01111 0.139771 3.01111 0.3125V1.01562L3.43751 1.01891V1.5625C3.6426 1.5332 3.8501 1.51242 4.06251 1.51242Z"></path>
                        <path d="M4.0625 1.875C1.81884 1.875 0 3.69382 0 5.9375C0 8.18118 1.81884 10 4.0625 10C6.30616 10 8.125 8.18118 8.125 5.9375C8.125 3.69382 6.30616 1.875 4.0625 1.875ZM5.96095 7.84688L3.59374 6.20806V3.89444H4.27688V5.85015L6.34976 7.28523L5.96095 7.84688Z"></path>
                      </svg>
                    </CouponPeriodIcon>
                    <CouponPeriode>Berlaku hingga 07 Mei 2023</CouponPeriode>
                  </CouponPeriodContainer>
                </CouponItem>
                <CouponItem>
                  <ImageCoupon src="https://astraotoshop.com/asset/coupon/GL/harbolnas/75.jpg" />
                  <SpanCodeCoupon>HARBOLNAS75</SpanCodeCoupon>
                  <CouponPeriodContainer>
                    <CouponPeriodIcon>
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 9 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.12589 1.12275L5.79004 1.70391L6.95378 2.37563L7.28965 1.79445C7.38215 1.63313 7.32707 1.42844 7.16636 1.33523L6.5852 0.999367C6.42442 0.906263 6.21911 0.961344 6.12589 1.12275Z"></path>
                        <path d="M4.06251 1.51242C4.27493 1.51242 4.48243 1.5332 4.68751 1.5625V1.01891L5.1172 1.01562V0.3125C5.1172 0.139771 4.97743 0 4.8047 0H3.32361C3.15088 0 3.01111 0.139771 3.01111 0.3125V1.01562L3.43751 1.01891V1.5625C3.6426 1.5332 3.8501 1.51242 4.06251 1.51242Z"></path>
                        <path d="M4.0625 1.875C1.81884 1.875 0 3.69382 0 5.9375C0 8.18118 1.81884 10 4.0625 10C6.30616 10 8.125 8.18118 8.125 5.9375C8.125 3.69382 6.30616 1.875 4.0625 1.875ZM5.96095 7.84688L3.59374 6.20806V3.89444H4.27688V5.85015L6.34976 7.28523L5.96095 7.84688Z"></path>
                      </svg>
                    </CouponPeriodIcon>
                    <CouponPeriode>Berlaku hingga 07 Mei 2023</CouponPeriode>
                  </CouponPeriodContainer>
                </CouponItem>
              </CouponItems>
            </CouponContainer>
            {/* =============================SECTION SPACE============================ */}
            <DivSectionSpace></DivSectionSpace>
            {/* ================================SECTION PRODUCTS================================= */}
            {/* ========================SECTION PRODUCTS TITLE========================= */}
            <TitleContainer>
              <DivCouponTitle>
                <SpanCouponTitle>Kupon diskon saya</SpanCouponTitle>
              </DivCouponTitle>
              <SpanCouponLihatSemua>Lihat Semua</SpanCouponLihatSemua>
            </TitleContainer>
            {/* ================================SECTION SLIDER PRODUCTS================================= */}
            <DivSliderProducts>
              <DivScrollIndianaContainer>
                <DivSliderProduct>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                </DivSliderProduct>
              </DivScrollIndianaContainer>
            </DivSliderProducts>

            {/* =============================SECTION SPACE============================ */}
            <DivSectionSpace></DivSectionSpace>
            {/* ================================SECTION PRODUCTS================================= */}
            {/* ========================SECTION PRODUCTS TITLE========================= */}
            <TitleContainer>
              <DivCouponTitle>
                <SpanCouponTitle>Kupon diskon saya</SpanCouponTitle>
              </DivCouponTitle>
              <SpanCouponLihatSemua>Lihat Semua</SpanCouponLihatSemua>
            </TitleContainer>
            {/* ================================SECTION SLIDER PRODUCTS================================= */}
            <DivSliderProducts>
              <DivScrollIndianaContainer>
                <DivSliderProduct>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                  <DivProductItem>
                    <AProductItem>
                      <DivImageProduct>
                        <AImageProductItem src="https://astraotoshop.com/asset/product/import/0/w/processed_0w20.jpg" />
                      </DivImageProduct>
                      <DivContainerProductItem>
                        <DivDescProductItem>
                          <SpanDescProductItem>
                            Voucher Shell Helix Astra Oil 0W-20 SN LCGC 4 Ltr +
                            Pemasangan (Oli Mobil untuk Mobil LCGC)
                          </SpanDescProductItem>
                        </DivDescProductItem>
                        <DivSpace></DivSpace>
                        <DivDicountHetProductItem>
                          <SpanDiscountProductItem>5%</SpanDiscountProductItem>
                          <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
                          <LabelDiscountProductItem>
                            Rp 528.000
                          </LabelDiscountProductItem>
                        </DivDicountHetProductItem>
                        <DivNettRatingProductItem>
                          <SpanNett>Rp 264.000</SpanNett>
                          <DivRating>
                            <SpanIconRating>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
                                  fill="#FEDB00"
                                ></path>
                              </svg>
                            </SpanIconRating>
                            <SpanValueRating>5</SpanValueRating>
                          </DivRating>
                        </DivNettRatingProductItem>
                        <DivContainerSpace></DivContainerSpace>
                        <DivSpace1></DivSpace1>
                        <DivSpace2></DivSpace2>
                        <DivSpace3></DivSpace3>
                      </DivContainerProductItem>
                    </AProductItem>
                  </DivProductItem>
                </DivSliderProduct>
              </DivScrollIndianaContainer>
            </DivSliderProducts>

            {/* ==============================SECTION FOOTER========================== */}
            <EmailPromo>
              <EmailPromoDesc>
                <EmailDesc>
                  Pastikan Kamu selalu mendapatkan email informasi promo dan
                  produk terbaru dari
                  <EmailDescAstraotoshop>
                    Astraotoshop.com!
                  </EmailDescAstraotoshop>
                </EmailDesc>
              </EmailPromoDesc>
              <InputEmailPromo>
                <InputEmailContainer>
                  <InputEmailContainer1>
                    <InputEmailContainer2>
                      <InputEmail
                        placeholder="Masukkan alamat email kamu"
                        type="text"
                      />
                    </InputEmailContainer2>
                  </InputEmailContainer1>
                </InputEmailContainer>
                <ButtonEmailContainer>
                  <ButtonEmail>Kirim</ButtonEmail>
                </ButtonEmailContainer>
              </InputEmailPromo>
              <EmailPromoDesc1>
                <EmailDesc1>
                  Dengan menekan tombol Kirim, Kamu setuju untuk menerima email
                  promosi dan penawaran dari Astra Otoshop. Kamu dapat berhenti
                  kapan saja dari keikutsertaan ini.
                </EmailDesc1>
              </EmailPromoDesc1>
            </EmailPromo>
            {/* ================================SECTION DESCRIPTION WEBSITE======================= */}
            <WebDescContainer>
              <TitleWebDescContainer>
                Astraotoshop.com: Toko Ban, Oli, Aki, Shock, Sparepart Mobil &
                Motor No 1 di Indonesia
              </TitleWebDescContainer>
              <WebDescriptionContainer>
                <WebLongDescSpan>
                  Selamat datang di website Astraotoshop.com, sebuah website
                  yang menjual beragam Ban, Oli, Aki, Shock, Spare part mobil
                  dan motor original dari distributor resmi untuk memenuhi
                  kebutuhan brand-brand otomotif ternama di Indonesia. Dijamin
                  Ori, Gratis Ongkir (Jabar,Jakarta, Banten) dan Kualitas Astra.
                  Tersedia mulai dari Ban, Oli, Aki, Shock, sparepart mesin
                  sepeda motor, eksterior hingga pelayanan pemasangan spare part
                  di Shop&Drive serta Motoquick dan bengkel rekanan resmi dari
                  Astra
                </WebLongDescSpan>
              </WebDescriptionContainer>
              <WebDescSpan>Baca Selengkapnya</WebDescSpan>
            </WebDescContainer>

            {/* ================================SECTION METODE PEMBAYARAN====================== */}
            <PaymentContainer>
              <TitlePaymentContainer>
                <TitlePayment>
                  <TitlePayment1>Metode Pembayaran</TitlePayment1>
                </TitlePayment>
              </TitlePaymentContainer>
              <ImagePaymentContainer>
                <ImagePayment></ImagePayment>
                <ImagePayment></ImagePayment>
                <ImagePayment></ImagePayment>
                <ImagePayment></ImagePayment>
                <ImagePayment></ImagePayment>
              </ImagePaymentContainer>
            </PaymentContainer>

            {/* ================================SECTION METODE PEMBAYARAN====================== */}
            <WebAdvantageContainer>
              <WebAdvantage>Astraotoshop.com Terjamin Keamanannya</WebAdvantage>
              <ListWebAdvantage>
                <ListAdvantage>
                  <ImgAdvantage src="https://astraotoshop.com/asset/aop/images/07eae640-1a21-4035-a9cd-707237b5b9af+versign+trusted.webp" />
                </ListAdvantage>
              </ListWebAdvantage>
            </WebAdvantageContainer>

            {/* ===================================OTHERSSECTION==================== */}
            <OthersContainer>
              <OtherContainer>
                <ItemOtherContainer>
                  <LabelOtherContainer>
                    <LabelOther>Tentang Astraotoshop.com</LabelOther>
                  </LabelOtherContainer>
                  <IconOtherContainer>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                        fill="#8C8C8C"
                      ></path>
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="6"
                        y="3"
                        width="6"
                        height="12"
                      >
                        <path
                          d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0)"></g>
                    </svg>
                  </IconOtherContainer>
                </ItemOtherContainer>
              </OtherContainer>
              <OtherContainer>
                <ItemOtherContainer>
                  <LabelOtherContainer>
                    <LabelOther>Tentang Astraotoshop.com</LabelOther>
                  </LabelOtherContainer>
                  <IconOtherContainer>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                        fill="#8C8C8C"
                      ></path>
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="6"
                        y="3"
                        width="6"
                        height="12"
                      >
                        <path
                          d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0)"></g>
                    </svg>
                  </IconOtherContainer>
                </ItemOtherContainer>
              </OtherContainer>
              <OtherContainer>
                <ItemOtherContainer>
                  <LabelOtherContainer>
                    <LabelOther>Tentang Astraotoshop.com</LabelOther>
                  </LabelOtherContainer>
                  <IconOtherContainer>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                        fill="#8C8C8C"
                      ></path>
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="6"
                        y="3"
                        width="6"
                        height="12"
                      >
                        <path
                          d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0)"></g>
                    </svg>
                  </IconOtherContainer>
                </ItemOtherContainer>
              </OtherContainer>
            </OthersContainer>
            {/* ===================================ENDSECTION==================== */}
            <EndSection>
              <LabelEndSection>
                Astraotoshop.com 2016 - 2023. All rights reserved.
              </LabelEndSection>
            </EndSection>
            {/* ===========================BOTTOMNAVIGATION================================== */}
            <BottomNavigationContainer>
              <BottomItemsContainer>
                <BottomItemContainer>
                  <IconBottomNavigation>
                    <svg
                      width="48"
                      height="34"
                      viewBox="0 0 48 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.01"
                        x="10"
                        y="3"
                        width="28.8"
                        height="28.8"
                        rx="6"
                        fill="#D8D8D8"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.8003 16.2L24.4003 9L34.0003 16.2V28.2H14.8003V16.2Z"
                        stroke="#575455"
                        stroke-width="1.2"
                      ></path>
                      <path
                        d="M30.2908 26.2364H18.509C18.2379 26.2364 18.0181 26.0166 18.0181 25.7455C18.0181 25.4744 18.2379 25.2546 18.509 25.2546H30.2908C30.5619 25.2546 30.7817 25.4744 30.7817 25.7455C30.7817 26.0166 30.5619 26.2364 30.2908 26.2364Z"
                        fill="#575455"
                      ></path>
                    </svg>
                  </IconBottomNavigation>
                  <LabelBottomNavigation>Beranda</LabelBottomNavigation>
                </BottomItemContainer>
                <BottomItemContainer>
                  <IconBottomNavigation>
                    <svg
                      width="48"
                      height="34"
                      viewBox="0 0 48 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.01"
                        x="10"
                        y="3"
                        width="28.8"
                        height="28.8"
                        rx="6"
                        fill="#D8D8D8"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.8003 16.2L24.4003 9L34.0003 16.2V28.2H14.8003V16.2Z"
                        stroke="#575455"
                        stroke-width="1.2"
                      ></path>
                      <path
                        d="M30.2908 26.2364H18.509C18.2379 26.2364 18.0181 26.0166 18.0181 25.7455C18.0181 25.4744 18.2379 25.2546 18.509 25.2546H30.2908C30.5619 25.2546 30.7817 25.4744 30.7817 25.7455C30.7817 26.0166 30.5619 26.2364 30.2908 26.2364Z"
                        fill="#575455"
                      ></path>
                    </svg>
                  </IconBottomNavigation>
                  <LabelBottomNavigation>Beranda</LabelBottomNavigation>
                </BottomItemContainer>
                <BottomItemContainer>
                  <IconBottomNavigation>
                    <svg
                      width="48"
                      height="34"
                      viewBox="0 0 48 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.01"
                        x="10"
                        y="3"
                        width="28.8"
                        height="28.8"
                        rx="6"
                        fill="#D8D8D8"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.8003 16.2L24.4003 9L34.0003 16.2V28.2H14.8003V16.2Z"
                        stroke="#575455"
                        stroke-width="1.2"
                      ></path>
                      <path
                        d="M30.2908 26.2364H18.509C18.2379 26.2364 18.0181 26.0166 18.0181 25.7455C18.0181 25.4744 18.2379 25.2546 18.509 25.2546H30.2908C30.5619 25.2546 30.7817 25.4744 30.7817 25.7455C30.7817 26.0166 30.5619 26.2364 30.2908 26.2364Z"
                        fill="#575455"
                      ></path>
                    </svg>
                  </IconBottomNavigation>
                  <LabelBottomNavigation>Beranda</LabelBottomNavigation>
                </BottomItemContainer>
                <BottomItemContainer>
                  <IconBottomNavigation>
                    <svg
                      width="48"
                      height="34"
                      viewBox="0 0 48 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.01"
                        x="10"
                        y="3"
                        width="28.8"
                        height="28.8"
                        rx="6"
                        fill="#D8D8D8"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.8003 16.2L24.4003 9L34.0003 16.2V28.2H14.8003V16.2Z"
                        stroke="#575455"
                        stroke-width="1.2"
                      ></path>
                      <path
                        d="M30.2908 26.2364H18.509C18.2379 26.2364 18.0181 26.0166 18.0181 25.7455C18.0181 25.4744 18.2379 25.2546 18.509 25.2546H30.2908C30.5619 25.2546 30.7817 25.4744 30.7817 25.7455C30.7817 26.0166 30.5619 26.2364 30.2908 26.2364Z"
                        fill="#575455"
                      ></path>
                    </svg>
                  </IconBottomNavigation>
                  <LabelBottomNavigation>Beranda</LabelBottomNavigation>
                </BottomItemContainer>
              </BottomItemsContainer>
            </BottomNavigationContainer>
          </SectionContainer>
        </MainContainer1>
      </MainContainer>
    </Container>
  );
};

export default LandingPage;
