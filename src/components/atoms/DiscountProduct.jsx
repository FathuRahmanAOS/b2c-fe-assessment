import React from "react";
import styled from "styled-components";

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
const DiscountProduct = (props) => {
  // const discount = props.discount * 100;
  const finalDiscount = (Math.round(props.discount * 100))
  return <SpanDiscountProductItem>{finalDiscount}%</SpanDiscountProductItem>;
};

export default DiscountProduct;
