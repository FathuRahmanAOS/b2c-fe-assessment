import styled from "styled-components";
import React from "react";
import BannerWidget from "../organisms/BannerWidget";
import KuponWidget from "../organisms/KuponWidget";
import EventWidget from "../organisms/EventWidget";

const Container = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  overflow: scroll;
`;

const BannerContainer = styled.div`
  margin-top: 100px;
`;
const KuponContainer = styled.div`
  margin-top: 5px;
`;

const EventContainer = styled.div`
  margin-top: 150px;
  flex-direction: column;
`;

const RelativeContent = () => {
  return (
      <Container>
        <BannerContainer>
          <BannerWidget />
        </BannerContainer>
        <KuponContainer>
          <KuponWidget />
        </KuponContainer>
        <EventContainer>
          <EventWidget />
          <EventWidget />
          <EventWidget />
        </EventContainer>
      </Container>
  );
};

export default RelativeContent;
