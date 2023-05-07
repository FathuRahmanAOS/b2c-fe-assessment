import React from "react";
import styled from "styled-components";
import LabelLihatSemuanya from "../atoms/LabelLihatSemua";
import TitleWidget from "../atoms/TitleWidget";

const TitleContainer = styled.div`
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
const WidgetTitle = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 75%;
`;


const TitleWidgetContainer = (props) => {
  return (
    <TitleContainer>
      <WidgetTitle>
        <TitleWidget title = {props.title}/>
      </WidgetTitle>
      <LabelLihatSemuanya />
    </TitleContainer>
  );
};

export default TitleWidgetContainer;
