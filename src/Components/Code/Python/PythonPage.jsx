import React, { Component } from "react"
import TopBar from "../../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../../constants"
import UpArrowBtn from "../../MultiplePages/UpArrowBtn"
import InfoArea from "../../MultiplePages/InfoArea"
import SimpleCard from "../MultiplePages/SimpleCard"
import "../MultiplePages/card.css"

const oneBigGraph = require("./pythonpics/1graph.png");
const oneGraphCode = require("./pythonpics/1graphcode.png");
const fourGraphs = require("./pythonpics/4 graphs.png");
const fourGraphsCode = require("./pythonpics/4graphscode.png");

const infoArray = [
	{
		header: "Comparing Data Visualization Techniques from Python, Matlab, and Excel",
		color: constants.CREME,
        text: "This project was done with the intent of diagnosing UCLA buildings that used significant quantities of electricity and training to handle data regarding club-made solar generator",
        align: 'center',
		images: [
        ]
    }
]

export default class PythonPage extends Component {
    render() {
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <UpArrowBtn/>
                <InfoArea
                    header="Comparing Data Visualization Techniques from Python, Matlab, and Excel"
                    color={constants.CREME}
                    text="This project was done with the intent of diagnosing UCLA buildings that used significant quantities of electricity and training to handle data regarding club-made solar generator"
                    align='center'
                />
                <SimpleCard image={fourGraphs} name="Graphs for all 4 dining halls"/>

                {/* <div className="grid-container"> */}
                 <SimpleCard image={oneBigGraph} name="Covel (Dining Hall) Electricity Usage"/>
                 <SimpleCard image={oneGraphCode} name="Code for Covel Graph"/>
                 <SimpleCard image={fourGraphsCode} name="Code for Grid Graphs"/>
                 {/* </div> */}
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

const Card = styled("div") ({
    fontFamily: "Abel",
    // boxShadow: "3px 3px 8px black", 
    fontSize: "20px",
    padding: "1%",
    marginLeft: "5%",
    backgroundColor: "white",
    // borderRadius: "20px",
})

const Row = styled("div") ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 0,
    paddingBottom: "2%"
    // borderStyle: "solid",
    // borderColor: "black"
})

const Column = styled("div") ({
    flex: "25%",
    maxWidth: "50%",
    padding: "0 2%"
})

const InfoContainer = styled('div')({
	order: 1,
	flex: 1
})