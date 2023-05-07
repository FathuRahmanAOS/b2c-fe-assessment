import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: block;
  width: 100%;
`;

const InputContainer = styled.input`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  display: block;
  width: 100%;
  margin: 0px;
  box-sizing: border-box;
  padding: 0px 0.444444em;
  height: 2.22222em;
  font-weight: 500;
  border-radius: 2px;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgb(255, 255, 255);
  font-size: 12px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgb(255, 255, 255);
  }
  :-ms-input-placeholder {
    color: rgb(255, 255, 255);
  }
`;

const InputSearch = () => {
  return (
    <Container>
      <InputContainer
        height="16"
        placeholder="Cari Kebutuhan Otomotifmu"
        type="text"
        autoComplete="new-password"
      />
    </Container>
  );
};

export default InputSearch;
