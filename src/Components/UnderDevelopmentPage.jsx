import React, { Component } from "react";
import TopBar from "./MultiplePages/TopBar";
import { styled } from "@material-ui/styles";
// import * as constants from "../constants";
const screen = require("./MultiplePages/screensize");

export default class UnderDevelopmentPage extends Component {
  constructor() {
    super();

    this.state = {
      screensize: screen.isMobilePortrait(document) ? "MobilePortrait" : "Else",
    };

    window.addEventListener("resize", () => {
      this.setState({
        screensize: screen.isMobilePortrait(document)
          ? "MobilePortrait"
          : "Else",
      });
    });
  }
  render() {
    return (
      <Container>
        <TopBar history={this.props.history} />
        <div
          style={{
            textAlign: "center",
            margin: "0 10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontFamily: "Abel",
            fontSize: "2rem",
            overflowWrap: "break-word",
          }}
        >
          HAH you thought there'd be something interesting here. JK. Still
          working the kinks out. Thank you for your patience.
        </div>
      </Container>
    );
  }
}

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "85vh",
  overflow: "scroll",
  backgroundImage: "linear-gradient(to right, #ffd6e8, #ffe9d6)",
  paddingBottom: "2%",
});