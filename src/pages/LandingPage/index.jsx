import React from "react";
import FixedContent from "../../components/templates/FixedContent";
import RelativeContent from "../../components/templates/RelativeContent";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 50%;
`;

const LandingPage = () => {
  return (
    <Container>
      <RelativeContent />
      <FixedContent />
    </Container>
  );
};

export default LandingPage;
