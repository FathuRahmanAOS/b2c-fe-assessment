import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(https://astraotoshop.com/590c4dfbf055b5bbffc269fb7f3360eb.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgb(1, 92, 163);
  padding: 60px 0px 10px 17px;
  position: relative;
`;

const EmailPromoDesc = styled.div`
  flex-direction: row;
  position: relative;
  margin: 0px 0px 15px;
  width: 70.8333%;
`;

const EmailDesc = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 18px;
`;

const EmailDescAstraotoshop = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  font-weight: bold;
`;

const InputEmailPromo = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0px 0px 17px;
  -webkit-box-align: center;
  align-items: center;

  align-items: flex-start;
`;

const EmailPromoDesc1 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 75%;
`;

const EmailDesc1 = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(255, 255, 255);
  font-size: 8px;
  line-height: 12px;
`;

const InputEmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 75%;

  margin-right: 11px !important;
`;
const InputEmailContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
const InputEmailContainer2 = styled.div`
  position: relative;
  background: white;
  border-radius: 7.56px;
  padding: 5px 10px;
  height: 40px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;
const InputEmail = styled.input`
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
  color: rgb(97, 97, 97);
  font-size: 12px;
`;

const ButtonEmailContainer = styled.div`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  margin-right: 0px !important;

  display: flex;
  flex-direction: row;
  position: relative;
`;

const ButtonEmail = styled.button`
  display: inline-flex;
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
  border: 0.0625em solid transparent;
  height: 3em;
  -webkit-box-pack: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  padding: 0px 1.5em;

  box-sizing: border-box;
  pointer-events: auto;

  background: rgb(254, 217, 0);
  border-radius: 4px;
  color: rgb(0, 64, 165);
  &:hover {
    transition: background-color 250ms ease-out 0s, color 250ms ease-out 0s,
      border-color 250ms ease-out 0s;
    background-color: rgb(33, 150, 243);
    color: rgb(255, 255, 255);
  }
`;

const EmailPromo = () => {
  return (
    <Container>
      <EmailPromoDesc>
        <EmailDesc>
          Pastikan Kamu selalu mendapatkan email informasi promo dan produk
          terbaru dari
          <EmailDescAstraotoshop>Astraotoshop.com!</EmailDescAstraotoshop>
        </EmailDesc>
      </EmailPromoDesc>
      <InputEmailPromo>
        <InputEmailContainer>
          <InputEmailContainer1>
            <InputEmailContainer2>
              <InputEmail
                placeholder="Masukkan alamat email kamu"
                type="text"
              />
            </InputEmailContainer2>
          </InputEmailContainer1>
        </InputEmailContainer>
        <ButtonEmailContainer>
          <ButtonEmail>Kirim</ButtonEmail>
        </ButtonEmailContainer>
      </InputEmailPromo>
      <EmailPromoDesc1>
        <EmailDesc1>
          Dengan menekan tombol Kirim, Kamu setuju untuk menerima email promosi
          dan penawaran dari Astra Otoshop. Kamu dapat berhenti kapan saja dari
          keikutsertaan ini.
        </EmailDesc1>
      </EmailPromoDesc1>
    </Container>
  );
};

export default EmailPromo;
