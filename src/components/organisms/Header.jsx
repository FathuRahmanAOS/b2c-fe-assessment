import styled from "styled-components";
import React from "react";
import SearchContainer from "../molecules/SearchContainer";
import MenuContainer from "../molecules/MenuContainer";
const Container = styled.div`
`;

const HeaderContainer = styled.div`
  flex: 1 1 0%;
  padding: 15px 17px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  filter: none;
  background-color: rgb(0, 51, 160);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAAA4CAYAAAAGubjzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJVSURBVHgB7d3tahNBFIDhadKkm8aKUFEqloJ/vABv2DvVHkJAJGmTzWR3Pp7nT+7gZTg5M3uTfv3+kwDIa7FK6cPPNJdFAiCvCPv9jzQncQfIbfOyC/yMxB0gp+EppeWQ5ibuALncfUlp/ZhKIO4AOawednEvhLgDXCrm68NzKom4A1xivxlzU1ZOxR1grAh6hH3mzZhDxB1grELDHsQdYIzN9yJWHo8Rd4BzxVbM6lMqmbgDnCPCXtDK4zHiDnCqSsIexB3gFDGGqSTsQdwB3hNhjz9QKyLuAG9ZDNWFPYg7wDER9u2877KPJe4Ah+zDXtizAqcSd4D/VR72IO4A/2og7EHcAfYaCXsQd4DQUNjDbQLo3XKb0v1LM2EP4g70rcILSqcwlgH61WjYg5M70KeKHgEbw8kd6E/jYQ/iDvSlg7AHYxmgHzFfL/wLSrmIO9C+WHGMj1kX/M3T3MQdaNtitQt7/HZE3IF2xa3TuJzUWdiDuANtWj2kNDw3dev0HOIOtGf9+Br2p9QzcQfaElGPuHdO3IE2xPhl8zpfv90mxB1oQacbMW8Rd6Bunf9xeoy4A/Xq5CmBMcQdqE+c0od4SuBj4jBxB+pivn4ScQfqEY9+Dd/M108g7kD5IuZ3X+2vn0HcgbLF+CX21zt60TEHcQfKZc1xNHEHymMMczFxB8piDJOFuAPliJN6nNiNYS4m7sD8XErKTtyBeS23uw9Xu5SUlbgD8/Cn6VWJOzA9p/WrE3dgWr6UNAlxB6axGHandSuOkxB34Lpitr7+7N31if0F/9wOuvp2GoMAAAAASUVORK5CYII=);
  background-size: cover;
`;

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <SearchContainer/>
        <MenuContainer/>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
