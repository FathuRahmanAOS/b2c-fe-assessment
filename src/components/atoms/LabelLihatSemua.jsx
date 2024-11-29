import React from "react";
import styled from "styled-components";
const Container = styled.div`
`;

const LabelLihatSemua = styled.span`
  text-decoration: none;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  font-weight: 700;
  color: rgb(0, 51, 160);
  cursor: pointer;
  font-size: 12px !important;
`;
const LabelLihatSemuanya = () => {
  return (
    <Container>
      <LabelLihatSemua>Lihat Semua</LabelLihatSemua>
    </Container>
  );
};

export default LabelLihatSemuanya;
