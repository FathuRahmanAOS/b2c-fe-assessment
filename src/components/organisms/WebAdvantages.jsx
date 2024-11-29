import React from "react";
import styled from "styled-components";

const WebAdvantageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 17px;
`;
const WebAdvantage = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;
const ListWebAdvantage = styled.div``;
const ListAdvantage = styled.p`
  font-family: Helvetica Neue, Helvetica, Roboto, sans-serif;
  color: #434343;
  font-size: 14px;
  line-height: 18px;
`;
const ImgAdvantage = styled.img`
  width: 166px;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

const WebAdvantages = () => {
  return (
    <WebAdvantageContainer>
      <WebAdvantage>Astraotoshop.com Terjamin Keamanannya</WebAdvantage>
      <ListWebAdvantage>
        <ListAdvantage>
          <ImgAdvantage src="https://astraotoshop.com/asset/aop/images/07eae640-1a21-4035-a9cd-707237b5b9af+versign+trusted.webp" />
        </ListAdvantage>
      </ListWebAdvantage>
    </WebAdvantageContainer>
  );
};

export default WebAdvantages;
