import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 1.5rem 0px;
`;

const BottomItemsContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 740px;
  margin: auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  bottom: 0px;
  background-color: white;
  z-index: 1;
  height: 64px;
  border-top: 1px solid rgb(235, 235, 235);
`;
const BottomItemContainer = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: rgb(217, 229, 239) !important;
  }
  /* background-color: rgb(217, 229, 239) !important; */
  color: rgb(64, 120, 165) !important;
`;
const IconBottomNavigation = styled.span`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.4375rem;
  color: currentcolor;
  margin: 0.1em;
  height: 23px;
  box-sizing: border-box;
`;
const LabelBottomNavigation = styled.p`
  margin-top: 5px;
  font-size: 10.3px;
  margin-bottom: 0px;
  font-family: arial, sans-serif;
  color: rgb(142, 142, 147);
`;

const BottomNavigationContainer = () => {
  return (
    <Container>
      <BottomItemsContainer>
        <BottomItemContainer>
          <IconBottomNavigation>
            <svg
              width="48"
              height="34"
              viewBox="0 0 48 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.01"
                x="10"
                y="3"
                width="28.8"
                height="28.8"
                rx="6"
                fill="#D8D8D8"
              ></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8003 16.2L24.4003 9L34.0003 16.2V28.2H14.8003V16.2Z"
                stroke="#575455"
                stroke-width="1.2"
              ></path>
              <path
                d="M30.2908 26.2364H18.509C18.2379 26.2364 18.0181 26.0166 18.0181 25.7455C18.0181 25.4744 18.2379 25.2546 18.509 25.2546H30.2908C30.5619 25.2546 30.7817 25.4744 30.7817 25.7455C30.7817 26.0166 30.5619 26.2364 30.2908 26.2364Z"
                fill="#575455"
              ></path>
            </svg>
          </IconBottomNavigation>
          <LabelBottomNavigation>Beranda</LabelBottomNavigation>
        </BottomItemContainer>
        <BottomItemContainer>
          <IconBottomNavigation>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.97">
                <path
                  d="M7.13672 9.84375H2.70703C1.21435 9.84375 0 8.6294 0 7.13672V2.70703C0 1.21435 1.21435 0 2.70703 0H7.13672C8.6294 0 9.84375 1.21435 9.84375 2.70703V7.13672C9.84375 8.6294 8.6294 9.84375 7.13672 9.84375ZM2.70703 1.3125C1.93807 1.3125 1.3125 1.93807 1.3125 2.70703V7.13672C1.3125 7.90568 1.93807 8.53125 2.70703 8.53125H7.13672C7.90568 8.53125 8.53125 7.90568 8.53125 7.13672V2.70703C8.53125 1.93807 7.90568 1.3125 7.13672 1.3125H2.70703Z"
                  fill="#575455"
                ></path>
                <path
                  d="M18.293 9.84375H13.8633C12.3706 9.84375 11.1562 8.6294 11.1562 7.13672V2.70703C11.1562 1.21435 12.3706 0 13.8633 0H18.293C19.7857 0 21 1.21435 21 2.70703V7.13672C21 8.6294 19.7857 9.84375 18.293 9.84375ZM13.8633 1.3125C13.0943 1.3125 12.4688 1.93807 12.4688 2.70703V7.13672C12.4688 7.90568 13.0943 8.53125 13.8633 8.53125H18.293C19.0619 8.53125 19.6875 7.90568 19.6875 7.13672V2.70703C19.6875 1.93807 19.0619 1.3125 18.293 1.3125H13.8633Z"
                  fill="#575455"
                ></path>
                <path
                  d="M16.0781 21C13.3642 21 11.1562 18.792 11.1562 16.0781C11.1562 13.3642 13.3642 11.1562 16.0781 11.1562C18.792 11.1562 21 13.3642 21 16.0781C21 18.792 18.792 21 16.0781 21ZM16.0781 12.4688C14.0879 12.4688 12.4688 14.0879 12.4688 16.0781C12.4688 18.0683 14.0879 19.6875 16.0781 19.6875C18.0683 19.6875 19.6875 18.0683 19.6875 16.0781C19.6875 14.0879 18.0683 12.4688 16.0781 12.4688Z"
                  fill="#575455"
                ></path>
                <path
                  d="M7.13672 21H2.70703C1.21435 21 0 19.7857 0 18.293V13.8633C0 12.3706 1.21435 11.1562 2.70703 11.1562H7.13672C8.6294 11.1562 9.84375 12.3706 9.84375 13.8633V18.293C9.84375 19.7857 8.6294 21 7.13672 21ZM2.70703 12.4688C1.93807 12.4688 1.3125 13.0943 1.3125 13.8633V18.293C1.3125 19.0619 1.93807 19.6875 2.70703 19.6875H7.13672C7.90568 19.6875 8.53125 19.0619 8.53125 18.293V13.8633C8.53125 13.0943 7.90568 12.4688 7.13672 12.4688H2.70703Z"
                  fill="#575455"
                ></path>
              </g>
            </svg>
          </IconBottomNavigation>
          <LabelBottomNavigation>Kategori</LabelBottomNavigation>
        </BottomItemContainer>
        <BottomItemContainer>
          <IconBottomNavigation>
            <svg
              width="48"
              height="34"
              viewBox="0 0 48 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.0001 6C19.7395 6 16.2732 9.46628 16.2732 13.7269C16.2732 19.0505 23.2106 27.4155 23.5059 27.7691C23.763 28.0768 24.2368 28.0772 24.4942 27.7691C24.7895 27.4155 31.7269 19.0505 31.7269 13.7269C31.7269 9.46628 28.2607 6 24.0001 6ZM24.0001 26.3282C22.4143 24.3132 17.561 17.8117 17.561 13.7269C17.561 10.1764 20.4496 7.28781 24.0001 7.28781C27.5506 7.28781 30.4391 10.1764 30.4391 13.7269C30.4391 17.8117 25.5858 24.3132 24.0001 26.3282Z"
                fill="#575455"
              ></path>
              <path
                d="M28.5073 13.083H27.8095C27.5373 11.4676 26.2593 10.1896 24.6439 9.91746V9.21959C24.6439 8.86398 24.3556 8.57568 24 8.57568C23.6444 8.57568 23.3561 8.86398 23.3561 9.21959V9.91746C21.7407 10.1897 20.4627 11.4677 20.1905 13.083H19.4927C19.1371 13.083 18.8488 13.3713 18.8488 13.7269C18.8488 14.0825 19.1371 14.3708 19.4927 14.3708H20.1905C20.4627 15.9862 21.7407 17.2643 23.3561 17.5364V18.2343C23.3561 18.5899 23.6444 18.8782 24 18.8782C24.3556 18.8782 24.6439 18.5899 24.6439 18.2343V17.5364C26.2593 17.2642 27.5373 15.9862 27.8095 14.3708H28.5073C28.863 14.3708 29.1513 14.0825 29.1513 13.7269C29.1513 13.3713 28.863 13.083 28.5073 13.083ZM24 16.3026C22.5798 16.3026 21.4244 15.1471 21.4244 13.7269C21.4244 12.3067 22.5798 11.1513 24 11.1513C25.4202 11.1513 26.5756 12.3067 26.5756 13.7269C26.5756 15.1471 25.4202 16.3026 24 16.3026Z"
                fill="#575455"
              ></path>
            </svg>
          </IconBottomNavigation>
          <LabelBottomNavigation>Lacak</LabelBottomNavigation>
        </BottomItemContainer>
        <BottomItemContainer>
          <IconBottomNavigation>
            <svg
              width="48"
              height="34"
              viewBox="0 0 48 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3813 20.5963C23.1248 20.8529 23.1248 21.2683 23.3813 21.5243C23.638 21.7808 24.0533 21.7808 24.3093 21.5243L28.8368 16.9961C28.9733 16.8596 29.0317 16.6778 29.0225 16.4993C29.0317 16.3202 28.9733 16.1391 28.8368 16.0026L24.3093 11.4751C24.0533 11.2185 23.6373 11.2185 23.3813 11.4751C23.1248 11.7317 23.1248 12.1471 23.3813 12.403L26.8221 15.8437H12.6563C12.294 15.8438 12 16.1378 12 16.5C12 16.8623 12.294 17.1563 12.6563 17.1563H26.8221L23.3813 20.5963ZM30.375 7.3125H17.25C15.8003 7.3125 14.625 8.48785 14.625 9.9375V12.5625H15.9375V9.9375C15.9375 9.213 16.5248 8.625 17.25 8.625H30.375C31.1002 8.625 31.6875 9.213 31.6875 9.9375V23.0625C31.6875 23.787 31.1002 24.375 30.375 24.375H17.25C16.5248 24.375 15.9375 23.7877 15.9375 23.0625V20.4375H14.625V23.0625C14.625 24.5122 15.8003 25.6875 17.25 25.6875H30.375C31.8247 25.6875 33 24.5122 33 23.0625V9.9375C33 8.48785 31.8247 7.3125 30.375 7.3125Z"
                fill="#575455"
              ></path>
            </svg>
          </IconBottomNavigation>
          <LabelBottomNavigation>Masuk</LabelBottomNavigation>
        </BottomItemContainer>
      </BottomItemsContainer>
    </Container>
  );
};

export default BottomNavigationContainer;
