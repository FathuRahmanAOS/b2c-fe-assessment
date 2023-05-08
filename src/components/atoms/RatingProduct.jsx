import React from "react";
import styled from "styled-components";

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
  /* color: currentcolor; */
  margin: 0.1em;
  height: 12px;
  box-sizing: border-box;
`;
const SpanValueRating = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  /* color: rgb(49, 49, 49); */
  font-size: 8px;
  font-weight: bold;
  line-height: 10px;
  margin: 0px 0px 0px 2px;
  color: ${(props) => (props.rating === 0 ? "white" : "#313131")};
`;

const RatingProduct = (props) => {
  return (
    <DivRating>
      <SpanIconRating rating={props.rating}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.23196 0.557491C5.47408 -0.18583 6.52571 -0.18583 6.76703 0.557491L7.63061 3.2144C7.68337 3.37621 7.78593 3.5172 7.92363 3.61722C8.06134 3.71724 8.22714 3.77116 8.39733 3.77129H11.1914C11.9735 3.77129 12.298 4.77207 11.666 5.23211L9.40618 6.87371C9.2682 6.97381 9.16545 7.11504 9.11268 7.27713C9.0599 7.43923 9.05981 7.61387 9.11241 7.77603L9.97598 10.4329C10.2181 11.1763 9.36664 11.7953 8.73308 11.3353L6.47325 9.69365C6.33541 9.59358 6.16943 9.53968 5.99909 9.53968C5.82875 9.53968 5.66277 9.59358 5.52493 9.69365L3.2651 11.3353C2.63235 11.7953 1.78169 11.1763 2.023 10.4329L2.88658 7.77603C2.93918 7.61387 2.93909 7.43923 2.88631 7.27713C2.83354 7.11504 2.73079 6.97381 2.5928 6.87371L0.333783 5.23291C-0.298162 4.77288 0.0270921 3.7721 0.808347 3.7721H3.60166C3.77199 3.77214 3.93797 3.71829 4.07583 3.61827C4.2137 3.51824 4.31639 3.37715 4.36919 3.21521L5.23277 0.558298L5.23196 0.557491Z"
            fill={props.rating === 0 ? "white" : "#FEDB00"}
          ></path>
        </svg>
      </SpanIconRating>
      <SpanValueRating rating={props.rating}>{props.rating}</SpanValueRating>
    </DivRating>
  );
};

export default RatingProduct;
