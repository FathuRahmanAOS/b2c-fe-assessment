import { Badge } from "@material-ui/core";
import { Search, SearchOutlined, CloseOutlined } from "@material-ui/icons";
import styled from "styled-components";
import React, { useState } from "react";

const SearchContainer = styled.div`
  position: relative;
  /* width: ${(props) => (props.isSearching ? 360 : 48)}px; */
  width: 360px;
  height: 26px;
  background: none;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  transition: all 0.3s ease;
  justify-items: center;
`;

const SearchInput = styled.input`
  padding-left: 40px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
  background: #335cb3;
  /* opacity: 0.4; */
  outline: none;
  font-size: 10px;
  color: white;
  border: none;
  border-radius: 4px;

  &:focus {
    border-color: rgba(0, 0, 0, 0.8);
  }
`;

const IconButton = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;
  margin-top: 5px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background: #000;
    transition: 0.2s ease;
    opacity: 0;
  }
`;

const Searchbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSearch = () => {
    setIsActive(!isActive);
  };
  return (
    <SearchContainer isSearching={isActive} onClick={toggleSearch}>
      <IconButton>
        {!isActive ? (
          <SearchOutlined style={{ color: "white", fontSize: 17 }} />
        ) : (
          <CloseOutlined style={{ color: "white", fontSize: 17 }} />
        )}
      </IconButton>
      <SearchInput />
    </SearchContainer>
  );
};

export default Searchbar;
