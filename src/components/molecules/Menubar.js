import { Badge } from "@material-ui/core";
import {
  PlaceOutlined,
  NotificationsNoneOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import React from "react";

const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ItemContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /* cursor: pointer;
  color: black; */
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Menubar = () => {
  return (
    <MenuContainer>
      <ItemContainer>
        <MenuItem>
          <PlaceOutlined style={{ color: "white", fontSize: 20 }} />
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem>
          <NotificationsNoneOutlined style={{ color: "white", fontSize: 17 }} />
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined style={{ color: "white", fontSize: 17 }} />
          </Badge>
        </MenuItem>
      </ItemContainer>
    </MenuContainer>
  );
};

export default Menubar;
