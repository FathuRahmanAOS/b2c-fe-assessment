import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin-right: 10px !important;
  width: 220px;
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

const CouponItem = (props) => {

  const getEndDate = props.cupon.date.split(" ");//2022-03-10
  const splitEndDate = getEndDate[0].toString().split("-");
  const event1 = new Date(splitEndDate);
  const event1ToString = event1.toDateString();
  const splitStartDate2 = event1ToString.split(" ");
  const mergeEndDate = [splitStartDate2[2],splitStartDate2[1],splitStartDate2[3]]
  const endDate = mergeEndDate.join(' ')
  
  return (
    <Container>
      <ImageCoupon src={props.cupon.image} />
      <SpanCodeCoupon>{props.cupon.code}</SpanCodeCoupon>
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
        <CouponPeriode>Berlaku hingga {endDate}</CouponPeriode>
      </CouponPeriodContainer>
    </Container>
  );
};

export default CouponItem;
