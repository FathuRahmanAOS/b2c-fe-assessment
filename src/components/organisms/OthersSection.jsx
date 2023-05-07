import React from "react";
import styled from "styled-components";

const OthersContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 17px;
`;
const OtherContainer = styled.a`
  text-decoration: none;
  border-top: 1px solid rgb(243, 244, 245);
`;
const ItemOtherContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 10px 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const LabelOtherContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;
const LabelOther = styled.span`
  font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
  color: rgb(59, 59, 59);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 19px;
`;
const IconOtherContainer = styled.span`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.25rem;
  color: currentcolor;
  margin: 0.1em;
  height: 20px;
  box-sizing: border-box;
`;

const OthersSection = () => {
  return (
    <OthersContainer>
      <OtherContainer>
        <ItemOtherContainer>
          <LabelOtherContainer>
            <LabelOther>Tentang Astraotoshop.com</LabelOther>
          </LabelOtherContainer>
          <IconOtherContainer>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                fill="#8C8C8C"
              ></path>
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="3"
                width="6"
                height="12"
              >
                <path
                  d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0)"></g>
            </svg>
          </IconOtherContainer>
        </ItemOtherContainer>
      </OtherContainer>
      <OtherContainer>
        <ItemOtherContainer>
          <LabelOtherContainer>
            <LabelOther>Bantuan</LabelOther>
          </LabelOtherContainer>
          <IconOtherContainer>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                fill="#8C8C8C"
              ></path>
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="3"
                width="6"
                height="12"
              >
                <path
                  d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0)"></g>
            </svg>
          </IconOtherContainer>
        </ItemOtherContainer>
      </OtherContainer>
      <OtherContainer>
        <ItemOtherContainer>
          <LabelOtherContainer>
            <LabelOther>Terhubung dengan Kami</LabelOther>
          </LabelOtherContainer>
          <IconOtherContainer>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                fill="#8C8C8C"
              ></path>
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="3"
                width="6"
                height="12"
              >
                <path
                  d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0)"></g>
            </svg>
          </IconOtherContainer>
        </ItemOtherContainer>
      </OtherContainer>
      <OtherContainer>
        <ItemOtherContainer>
          <LabelOtherContainer>
            <LabelOther>Kunjungi Website Astra Otoparts</LabelOther>
          </LabelOtherContainer>
          <IconOtherContainer>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                fill="#8C8C8C"
              ></path>
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="3"
                width="6"
                height="12"
              >
                <path
                  d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0)"></g>
            </svg>
          </IconOtherContainer>
        </ItemOtherContainer>
      </OtherContainer>
      <OtherContainer>
        <ItemOtherContainer>
          <LabelOtherContainer>
            <LabelOther>Ketentuan dan Kebijakan</LabelOther>
          </LabelOtherContainer>
          <IconOtherContainer>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                fill="#8C8C8C"
              ></path>
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="3"
                width="6"
                height="12"
              >
                <path
                  d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0)"></g>
            </svg>
          </IconOtherContainer>
        </ItemOtherContainer>
      </OtherContainer>
      <OtherContainer>
        <ItemOtherContainer>
          <LabelOtherContainer>
            <LabelOther>Privacy Policy</LabelOther>
          </LabelOtherContainer>
          <IconOtherContainer>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                fill="#8C8C8C"
              ></path>
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="3"
                width="6"
                height="12"
              >
                <path
                  d="M10.1893 9L6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0)"></g>
            </svg>
          </IconOtherContainer>
        </ItemOtherContainer>
      </OtherContainer>
    </OthersContainer>
  );
};

export default OthersSection;
