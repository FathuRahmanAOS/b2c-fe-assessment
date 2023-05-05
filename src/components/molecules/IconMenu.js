import React, { useEffect, useState } from "react";
import styled from "styled-components";
//redux needed
import { useDispatch, useSelector } from "react-redux";
import { doGetWidgetRequest } from "../../store/widget/actions";

const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
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

const Image = styled.img`
  height: 25px;
  width: 25px;
`;

const IconMenu = () => {
  const dispatch = useDispatch();
  const { widgetData } = useSelector((state) => state.widgetState);

  useEffect(() => {
    dispatch(doGetWidgetRequest());
  }, []);

  return (
    <MenuContainer>
      {widgetData[0].iconWidgetData.map((item) => (
        <MenuItem>
          <Image src={`/assets/${item.urls}`} />
          <MenuName>{item.menu}</MenuName>
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default IconMenu;
