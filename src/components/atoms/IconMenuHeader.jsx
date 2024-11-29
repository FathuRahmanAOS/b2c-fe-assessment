import styled from "styled-components";
import React from "react";

const ButtonContainer = styled.button`
  display: inline-flex;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
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

const IconMenu = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const IconMenu1 = styled.span`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.25em;
  color: currentcolor;
  margin: 0.1em;
  box-sizing: border-box;
`;

const IconMenuHeader = (props) => {
  return (
    <ButtonContainer>
      <IconMenu>
        <IconMenu1>{props.icon}</IconMenu1>
      </IconMenu>
    </ButtonContainer>
  );
};

export default IconMenuHeader;
