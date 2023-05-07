import React from "react";
import styled from "styled-components";

const LabelHetProductItem = styled.label`
  font-size: 10px;
  line-height: 14px;
  text-decoration-line: line-through;
  color: rgb(0, 0, 0);
  mix-blend-mode: normal;
  opacity: 0.4;
`;
const LabelHetProduct = (props) => {

  const IdrFormat = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  return <LabelHetProductItem>{IdrFormat(props.het)}</LabelHetProductItem>;
};

export default LabelHetProduct;
