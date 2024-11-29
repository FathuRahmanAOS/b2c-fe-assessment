import styled from "styled-components";
import React from "react";

const SearchContainerButton = styled.button`
  display: inline-flex;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  font-size: 0.65rem;
  border: 0.0625em solid transparent;
  height: 2em;
  -webkit-box-pack: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  padding: 0px 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: auto;
  transition: background-color 250ms ease-out 0s, color 250ms ease-out 0s,
    border-color 250ms ease-out 0s;
  background-color: rgb(33, 150, 243);
  color: rgb(255, 255, 255);
  background-color: transparent;
`;

const SearchIcon = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SearchIcon1 = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0.65rem;
  color: currentcolor;
  margin: 0.1em;
  height: 10.4px;
  box-sizing: border-box;
`;

const IconSearch = (props) => {
  return (
    <SearchContainerButton>
      <SearchIcon>
        <SearchIcon1>{props.icon}</SearchIcon1>
      </SearchIcon>
    </SearchContainerButton>
  );
};

export default IconSearch;
