import React from "react";
import styled from "styled-components";
import TitleWidgetContainer from "../molecules/TitleWidgetContainer";
import CouponItem from "../molecules/CouponItem";
const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin: 10px 0px 20px;
`;

const CouponItems = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 10px 17px 0px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Coupon = (props) => {
  return (
    <CouponContainer>
      <TitleWidgetContainer title = {props.cupon.title}/>
      <CouponItems>
      {(props.cupon.cupon_discount || []).map((item) => (
        <CouponItem cupon = {item}/>
       ))}
      </CouponItems>
    </CouponContainer>
  );
};

export default Coupon;
