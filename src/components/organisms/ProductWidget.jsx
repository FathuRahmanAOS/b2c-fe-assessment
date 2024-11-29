import React from "react";
import styled from "styled-components";
import ProductContainer from "../molecules/ProductContainer";
import TitleWidgetContainer from "../molecules/TitleWidgetContainer";

const Container = styled.div`
  background-color: none;
`;

const DivSectionSpace = styled.div`
  height: 15px;
`;

const DivSliderProducts = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgb(9, 32, 83);
  margin-top: 15px;
`;

const DivScrollIndianaContainer = styled.div`
  overflow: auto;
  display: flex;
  padding: 10px 0px;
`;

const DivSliderProduct = styled.div`
  margin-left: 160px;
  display: flex;
  flex-direction: row;
`;

const ProductWidget = (props) => {
  return (
    <Container>
      {/* =============================SECTION SPACE============================ */}
      <DivSectionSpace></DivSectionSpace>
      <TitleWidgetContainer title={props.products.detail.event_product.headline} />
      {/* ================================SECTION SLIDER PRODUCTS================================= */}
      <DivSliderProducts
        backgroundImage={props.products.detail.event_product.image}
      >
        <DivScrollIndianaContainer>
          <DivSliderProduct>
            {(props.products.detail.event_product.product || []).map((item) => (
              <ProductContainer
                name={item.name}
                het={item.priceOriginal}
                nett={item.price}
                discount={item.discountPercentage}
                rating={item.rating}
                image={item.product_media[0].url}
              />
            ))}
          </DivSliderProduct>
        </DivScrollIndianaContainer>
      </DivSliderProducts>
    </Container>
  );
};

export default ProductWidget;
