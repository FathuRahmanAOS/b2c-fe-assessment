import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(70, 70, 70);
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
`;
const NettProduct = (props) => {
  const IdrFormat = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  return <Container> {IdrFormat(props.nett)}</Container>;
};

export default NettProduct;
