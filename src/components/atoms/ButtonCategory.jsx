import React from "react";
import styled from "styled-components";

const ButtonTitle = styled.button`
  background-color: rgb(0, 51, 160);
  color: rgb(255, 255, 255);
  border: 2px solid rgb(0, 51, 160);
  border-radius: 4px;
  font-size: 11px;
  margin-right: 10px;

  display: inline-flex;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  /* font-size: 1rem; */
  /* border: 0.0625em solid transparent; */
  height: 2em;
  -webkit-box-pack: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  padding: 0px 1em;
  /* border-radius: 0.125em; */
  box-sizing: border-box;
  pointer-events: auto;
  transition: background-color 250ms ease-out 0s, color 250ms ease-out 0s,
    border-color 250ms ease-out 0s;
  /* background-color: rgb(33, 150, 243);
    color: rgb(255, 255, 255); */
`;

const ButtonCategory = () => {
  return <ButtonTitle>Promo</ButtonTitle>;
};

export default ButtonCategory;
