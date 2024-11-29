import styled from "styled-components";
import React from "react";
import IconSearch from "../atoms/IconSearch";
import InputSearch from "../atoms/InputSearch";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 62.5%;
`;

const SearchContainerAgain = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 489px;
`;

const SearchContainerAgain1 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const SearchContainerAgain2 = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.2);
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

const SearchContainer = () => {
  return (
    <Container>
      <SearchContainerAgain>
        <SearchContainerAgain1>
          <SearchContainerAgain2>
            <IconSearch
              icon={
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.52123 13.9012C3.71875 13.9012 0.63623 10.8187 0.63623 7.01623C0.63623 3.21375 3.71875 0.131226 7.52123 0.131226C11.3237 0.131226 14.4062 3.21375 14.4062 7.01623C14.4062 8.62559 13.8541 10.106 12.9288 11.2783L16.599 14.9485C16.9153 15.2648 16.9153 15.7777 16.599 16.094C16.2827 16.4103 15.7698 16.4103 15.4535 16.094L11.7833 12.4238C10.611 13.349 9.1306 13.9012 7.52123 13.9012ZM11.1919 10.7906C10.2436 11.7131 8.94875 12.2812 7.52123 12.2812C4.61345 12.2812 2.25623 9.92401 2.25623 7.01623C2.25623 4.10845 4.61345 1.75123 7.52123 1.75123C10.429 1.75123 12.7862 4.10845 12.7862 7.01623C12.7862 8.44374 12.2181 9.73856 11.2956 10.6869C11.277 10.7025 11.259 10.719 11.2415 10.7365C11.224 10.7539 11.2075 10.772 11.1919 10.7906Z"
                    fill="white"
                  ></path>
                </svg>
              }
            />
            <InputSearch
              height="16"
              placeholder="Cari Kebutuhan Otomotifmu"
              type="text"
              autoComplete="new-password"
            />
            <IconSearch
              icon={
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="icon-remove"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.3835 1.2533C10.7695 0.858266 11.4026 0.850917 11.7976 1.23688C12.1927 1.62285 12.2 2.25597 11.814 2.651L7.44747 7.12013L8.58363 8.28298L11.814 11.5892C12.2 11.9843 12.1926 12.6174 11.7976 13.0034C11.4026 13.3893 10.7695 13.382 10.3835 12.9869L7.15309 9.68068L6.04939 8.55105L4.94569 9.68068L1.7153 12.9869C1.32933 13.382 0.69621 13.3893 0.301179 13.0034C-0.093852 12.6174 -0.101201 11.9843 0.284763 11.5892L3.51515 8.28298L4.65131 7.12013L0.284734 2.651C-0.101231 2.25597 -0.0938823 1.62285 0.301148 1.23688C0.696179 0.850917 1.3293 0.858266 1.71527 1.2533L6.04939 5.68922L10.3835 1.2533Z"
                    fill="white"
                  ></path>
                </svg>
              }
            />
          </SearchContainerAgain2>
        </SearchContainerAgain1>
      </SearchContainerAgain>
    </Container>
  );
};

export default SearchContainer;
