import React from "react";
<<<<<<< Updated upstream
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
=======
// import RelativeContent from "../../components/templates/RelativeContent";
import styled from "styled-components";
import Homepage from "../../components/templates/Homepage";

const LandingPage = () => {
  return (
    <div>
      <Homepage />
    </div>
>>>>>>> Stashed changes
  );
};

export default LandingPage;
