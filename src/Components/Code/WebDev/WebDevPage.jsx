import React, { Component } from "react";
import TopBar from "../../MultiplePages/TopBar";
import { styled } from "@material-ui/styles";
import * as constants from "../../../constants";
import UpArrowBtn from "../../MultiplePages/UpArrowBtn";
import InfoArea from "../../MultiplePages/InfoArea";
const screen = require("../../MultiplePages/screensize");

const infoArray = [
  {
    header: "designcreatesolar.com",
    color: constants.LIGHT_PINK,
    text:
      "As the co-lead of UCLA's SOLAR club's Software Subsystem, I maintain the club's website. Built with the Software team in React.",
  },
  {
    header: "offtheclockjho.com",
    color: constants.PINK_GRAY,
    text: "Built myself using React, AWS, Docker (soon to include MongoDB)",
  },
  {
    header: "Wordpress Consultation",
    color: constants.LIGHT_PINK,
    text:
      "Commissioned to teach client about WP functionality; learned how to make WP Themes with React along the way",
  },
  {
    header: "ClassHelper Chrome Extension",
    color: constants.PINK_GRAY,
    text:
      "Club React project to help UCLA students find classes that fit their schedule during enrollment",
  },
];

export default class WebDevPage extends Component {
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
        <UpArrowBtn />
        <InfoContainer order={2}>
          {infoArray.map((info) => {
            return (
              <InfoArea
                header={info.header}
                color={info.color}
                text={info.text}
                screensize={this.state.screensize}
              />
            );
          })}
        </InfoContainer>
      </Container>
    );
  }
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "scroll",
});

const InfoContainer = styled("div")({
  order: 1,
  flex: 1,
});
