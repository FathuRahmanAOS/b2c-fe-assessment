import React from "react";
import styled from "styled-components";
import TitleCategory from "../molecules/TitleCategory";
import ProductContainer from "../molecules/ProductContainer";

const Container = styled.div`
  background: rgb(249, 249, 249);
  margin-top: 10px;
  padding: 18px 0px 0px;

  display: flex;
  flex-direction: column;
  position: relative;
`;

const SectionTitle = styled.div`
  /* margin: 0px 17px; */
  /* cursor: pointer; */

  /* display: flex; */
  /* flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between; */
`;

const SectionProduct = styled.div`
  overflow: auto;

  display: flex;
  flex-direction: row;
  position: relative;
  padding: 10px 0px 18px;
`;

const SectionProducts = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 10px 0px 18px;

  overflow: auto;
`;

const ProductCategory = (props) => {
  return (
    <Container>
      <SectionTitle>
        <TitleCategory />
      </SectionTitle>
      <SectionProducts>
        <SectionProduct>
          {(props.promo.detail.promo.products || []).map((item) => (
            <ProductContainer />
          ))}
        </SectionProduct>
      </SectionProducts>
    </Container>
  );
};

export default ProductCategory;
