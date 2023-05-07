import React from "react";
import Header from "../organisms/Header";
import styled from "styled-components";

const WebDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 17px;
`;
const TitleWebDescContainer = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(49, 49, 49);
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  margin-bottom: 10px !important;
`;
const WebDescriptionContainer = styled.div`
  background: rgb(255, 255, 255);
  position: relative;
  height: 110px;
  overflow: hidden;

  ::after {
    width: 100%;
    height: 110px;
    position: absolute;
    top: 0px;
    left: 0px;
    content: close-quote;
  }

  margin-bottom: 10px !important;
`;
const WebDescSpan = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(0, 51, 160);
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
`;

const WebLongDescSpan = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(97, 97, 97);
  font-size: 13px;
  line-height: 18px;

  overflow: auto;
  /* height: 100%; */
`;

const WebDescription = () => {
  return (
    <WebDescContainer>
      <TitleWebDescContainer>
        Astraotoshop.com: Toko Ban, Oli, Aki, Shock, Sparepart Mobil & Motor No
        1 di Indonesia
      </TitleWebDescContainer>
      <WebDescriptionContainer>
        <WebLongDescSpan>
          Selamat datang di website Astraotoshop.com, sebuah website yang
          menjual beragam Ban, Oli, Aki, Shock, Spare part mobil dan motor
          original dari distributor resmi untuk memenuhi kebutuhan brand-brand
          otomotif ternama di Indonesia. Dijamin Ori, Gratis Ongkir
          (Jabar,Jakarta, Banten) dan Kualitas Astra. Tersedia mulai dari Ban,
          Oli, Aki, Shock, sparepart mesin sepeda motor, eksterior hingga
          pelayanan pemasangan spare part di Shop&Drive serta Motoquick dan
          bengkel rekanan resmi dari Astra
        </WebLongDescSpan>
      </WebDescriptionContainer>
      <WebDescSpan>Baca Selengkapnya</WebDescSpan>
    </WebDescContainer>
  );
};

export default WebDescription;
