import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin: 0px;
`;

const ImgIconMenuWidget = (props) => {
  return (
    <Container>
      <Image src={props.image} />
    </Container>
  );
};

export default ImgIconMenuWidget;
