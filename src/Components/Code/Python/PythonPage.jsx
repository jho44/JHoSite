import React, { Component } from "react";
import TopBar from "../../MultiplePages/TopBar";
import { styled } from "@material-ui/styles";
import * as constants from "../../../constants";
import InfoArea from "../../MultiplePages/InfoArea";

const oneBigGraph = require("./pythonpics/1graph.png");
const oneGraphCode = require("./pythonpics/1graphcode.png");
const fourGraphs = require("./pythonpics/4 graphs.png");
const fourGraphsCode = require("./pythonpics/4graphscode.png");

// const infoArray = [
// 	{
// 		header: "Comparing Data Visualization Techniques from Python, Matlab, and Excel",
// 		color: constants.CREME,
//         text: "This project was done with the intent of diagnosing UCLA buildings that used significant quantities of electricity and training to handle data regarding club-made solar generator",
//         align: 'center'
//     }
// ]

export default class PythonPage extends Component {
  render() {
    return (
      <div>
        <TopBar history={this.props.history} />

        <Container>
          <InfoArea
            header="Comparing Data Visualization Techniques"
            color={constants.PINK_GRAY}
            text="Amongst Python, Matlab, and Excel. Done with the intent of diagnosing UCLA buildings that used significant quantities of electricity and training to handle data"
            screensize="MobilePortrait"
          />
          <img src={fourGraphs} style={{ width: "80vw" }} />
          <Caption>Graphs for all 4 dining halls</Caption>

          <img src={oneBigGraph} style={{ width: "70vw" }} />
          <Caption>Covel (Dining Hall) Electricity Usage</Caption>

          <img src={oneGraphCode} style={{ width: "50vw" }} />
          <Caption>Code for Covel Graph</Caption>

          <img src={fourGraphsCode} style={{ width: "50vw" }} />
          <Caption>Code for Grid Graphs</Caption>
        </Container>
      </div>
    );
  }
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  overflow: "scroll",
  backgroundColor: constants.PINK_GRAY,
  paddingBottom: "2%",
});
const Caption = styled("h4")({
  fontFamily: "Avenir Next",
  color: constants.LIGHT_GRAY,
  //   padding: "0 0 1rem 0",
  margin: "0.5rem 0 2rem 0",
});
