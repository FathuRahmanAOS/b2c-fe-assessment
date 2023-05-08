import React from "react";
import styled from "styled-components";

const LabelHetProductItem = styled.label`
  font-size: 10px;
  line-height: 14px;
  text-decoration-line: line-through;
  
  mix-blend-mode: normal;
  opacity: 0.4;

  color: ${(props) =>
    props.discount === 0 ? 'white' : '#000000'};
`;
const LabelHetProduct = (props) => {
  const finalDiscount = Math.round(props.discount * 100);
  const IdrFormat = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  return <LabelHetProductItem discount={finalDiscount}>{IdrFormat(props.het)}</LabelHetProductItem>;
};

export default LabelHetProduct;
