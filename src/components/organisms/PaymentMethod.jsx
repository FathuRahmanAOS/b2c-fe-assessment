import React from "react";
import styled from "styled-components";

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

const PaymentMethod = () => {
  return (
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
  );
};

export default PaymentMethod;
