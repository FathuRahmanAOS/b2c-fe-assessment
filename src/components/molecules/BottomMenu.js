import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import bengkel from "../../pages/assets/homeservice.jpg";
import {
  HomeOutlined,
  WidgetsOutlined,
  PlaceOutlined,
  InputOutlined,
} from "@material-ui/icons";

const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  /* margin-left: 20px;
  margin-right: 20px;
  padding: 10px 0px 0px 0px; */
`;
const MenuItem = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: powderblue; */
`;

const MenuName = styled.h1`
  font-size: 10px;
  color: #8e8e93;
  margin-top: 0px;
`;

const Icon = styled.div`
  height: 25px;
  width: 25px;
`;

const BottomMenu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <Icon>
          <HomeOutlined />
        </Icon>
        <MenuName>Home</MenuName>
      </MenuItem>
      <MenuItem>
        <Icon>
          <WidgetsOutlined />
        </Icon>
        <MenuName>Layanan Bengkel</MenuName>
      </MenuItem>
      <MenuItem>
        <Icon>
          <PlaceOutlined />
        </Icon>
        <MenuName>Lacak</MenuName>
      </MenuItem>
      <MenuItem>
        <Icon>
          <InputOutlined />
        </Icon>
        <MenuName>Masuk</MenuName>
      </MenuItem>
    </MenuContainer>
  );
};

export default BottomMenu;
