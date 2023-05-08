import React from "react";
import styled from "styled-components";
import Homepage from "../../components/templates/Homepage";
const Container = styled.div`
  /* width: 80%;
  height: 50%; */
`;
const LandingPage = () => {
  return (
    <Container>
      <Homepage />
    </Container>
  );
};

export default LandingPage;
