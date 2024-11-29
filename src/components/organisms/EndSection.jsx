import React from "react";
import styled from "styled-components";
const Container = styled.div`
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

const EndSection = () => {
  return (
    <Container>
      <LabelEndSection>
        Astraotoshop.com 2016 - 2023. All rights reserved.
      </LabelEndSection>
    </Container>
  );
};

export default EndSection;
