import React from "react";
import styled from "styled-components";
import ImageProduct from "../atoms/ImageProduct";
import DescProduct from "../atoms/DescProduct";
import DiscountProduct from "../atoms/DiscountProduct";
import LabelHetProduct from "../atoms/LabelHetProduct";
import NettProduct from "../atoms/NettProduct";
import RatingProduct from "../atoms/RatingProduct";

const DivProductItem = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 10px;
  border-radius: 4px;
  text-align: left;
  max-width: 145px;
  margin-left: 17px;
`;

const AProductItem = styled.a`
  text-decoration: none;
`;

const DivContainerProductItem = styled.div`
  display: flex;
  /* flex-direction: row; */
  position: relative;

  flex-direction: column;
  padding: 10px;
`;

const DivSpace = styled.div`
  height: 10px;
`;
const DivDicountHetProductItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
`;
const DivNettRatingProductItem = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0px 0px 5px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const DivContainerSpace = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
`;
const DivSpace1 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
`;
const DivSpace2 = styled.div`
  height: 5px;
`;
const DivSpace3 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

const DivSpaceDiscountProductItem = styled.div`
  width: 4px;
`;

const ProductContainer = (props) => {

  return (
    <DivProductItem>
      <AProductItem>
        <ImageProduct image={props.image} />
        <DivContainerProductItem>
          <DescProduct name = {props.name}/>
          <DivSpace></DivSpace>
          <DivDicountHetProductItem>
            <DiscountProduct discount = {props.discount}/>
            <DivSpaceDiscountProductItem></DivSpaceDiscountProductItem>
            <LabelHetProduct het = {props.het} />
          </DivDicountHetProductItem>
          <DivNettRatingProductItem>
            <NettProduct nett = {props.nett}/>
            <RatingProduct rating = {props.rating}/>
          </DivNettRatingProductItem>
          <DivContainerSpace></DivContainerSpace>
          <DivSpace1></DivSpace1>
          <DivSpace2></DivSpace2>
          <DivSpace3></DivSpace3>
        </DivContainerProductItem>
      </AProductItem>
    </DivProductItem>
  );
};

export default ProductContainer;
