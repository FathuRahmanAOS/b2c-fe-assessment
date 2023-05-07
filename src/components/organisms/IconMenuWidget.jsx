import React from "react";
import styled from "styled-components";
import ImgIconMenuWidget from "../atoms/ImgIconMenuWidget";
import LabelIconMenuWidget from "../atoms/LabelIconMenuWidget";

const Container = styled.div`
  background: rgb(252, 252, 252);
  margin: 12px 17px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 10px;
  position: fixed;
  z-index: 2;
  border-radius: 8px;
  padding: 18px 10px 11px;
  width: 685px !important;
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`;

const IconMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  width: 14%;

  cursor: pointer;
`;

const IconMenu = styled.div``;
const LabelMenu = styled.label`
  color: rgb(97, 97, 97);
  font-size: 9px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin: 0px;
`;

const IconMenuWidget = (props) => {
  const menu = props.menu.detail.shortcuts.filter((element) => {
    if (
      element.module === "Layanan Bengkel" ||
      element.module === "Home Service" ||
      element.module === "Suku Cadang" ||
      element.module === "Astra Otopower" ||
      element.module === "Lainnya"
    ) {
      return true;
    }
    return false;
  });

  return (
    <Container>
      {(menu || []).map((item) => (
        <IconMenuContainer>
          <ImgIconMenuWidget image = {item.icon} />
          <LabelIconMenuWidget name = {item.name} />
        </IconMenuContainer>
      ))}
    </Container>
  );
};

export default IconMenuWidget;
