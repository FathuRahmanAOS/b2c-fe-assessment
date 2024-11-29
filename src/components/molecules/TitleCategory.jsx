import React from "react";
import styled from "styled-components";
import ButtonCategory from "../atoms/ButtonCategory";
import LabelLihatSemuanya from "../atoms/LabelLihatSemua";

const Container = styled.div`
  margin: 0px 17px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const TitleCategory = () => {
  return (
    <Container>
      <CategoryContainer>
        <ButtonCategory />
        <ButtonCategory />
        <ButtonCategory />
      </CategoryContainer>
      <LabelLihatSemuanya/>
    </Container>
  );
};

export default TitleCategory;
