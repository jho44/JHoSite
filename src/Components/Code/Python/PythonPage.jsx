import React, { Component } from "react"
import TopBar from "../../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../../constants"
import InfoArea from "../../MultiplePages/InfoArea"
import SimpleCard from "../MultiplePages/SimpleCard"
import "../MultiplePages/card.css"

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
            <Container>
                <TopBar history = {this.props.history}/>
                <InfoArea
                    header="Comparing Data Visualization Techniques"
                    color={constants.CREME}
                    text="Amongst Python, Matlab, and Excel. Done with the intent of diagnosing UCLA buildings that used significant quantities of electricity and training to handle data regarding club-made solar generator"
                    screensize="MobilePortrait"
                />
                <SimpleCard image={fourGraphs} name="Graphs for all 4 dining halls"/>
                <SimpleCard image={oneBigGraph} name="Covel (Dining Hall) Electricity Usage"/>
                <SimpleCard image={oneGraphCode} name="Code for Covel Graph"/>
                <SimpleCard image={fourGraphsCode} name="Code for Grid Graphs"/>

            </Container>
        )
    }
}

const Container = styled("div") ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "scroll",
    backgroundColor: constants.DARK_GRAY,
    paddingBottom: "2%"
})
