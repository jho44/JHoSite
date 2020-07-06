import React from "react";
import { styled } from "@material-ui/styles";
import * as constants from "../../constants";

const Footer = () => {
  return (
    <GrayDiv>
      <Container>
        <Content>Made for funsies</Content>
        <Content>
          Contact me with{" "}
          <Mailto href="mailto:jessicaho44@g.ucla.edu">this</Mailto>
        </Content>
        <Content>Copyright © OffTheClockJHo 2019-2020</Content>
      </Container>
    </GrayDiv>
  );
};

const GrayDiv = styled("div")({
  backgroundImage: "linear-gradient(to right, #ffd6e8, #ffe9d6)",
  opacity: 0.5,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2% 0",
  boxShadow: "inset 0px 3px 5px #e4e4ee",
});

const Container = styled("div")({
  order: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Avenir Next",
});

const Content = styled("p")({
  color: constants.PINK_GRAY,
  margin: "0.4rem 0",
});

const Mailto = styled("a")({
  color: constants.PINK_GRAY,
});
export default Footer;
