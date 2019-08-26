import React, { Component } from "react"
import TopBar from "../../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../../constants"
import ProjHeader from "../MultiplePages/ProjHeader"
import SimpleCard from "../MultiplePages/SimpleCard"
import PrettyHeader from "../MultiplePages/PrettyHeader";
import FullCard from "../MultiplePages/FullCard"

const oneBigGraph = require("./pythonpics/1graph.png");
const oneGraphCode = require("./pythonpics/1graphcode.png");
const fourGraphs = require("./pythonpics/4 graphs.png");
const fourGraphsCode = require("./pythonpics/4graphscode.png");

export default class IOSDevPage extends Component {
    render() {
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <div style={{display: "flex", padding: "1%", paddingLeft: 0, paddingBottom: "2%"}}>
                    <PrettyHeader name="Comparing Data Visualization Techniques from Python, Matlab, and Excel"/>
                    <Card>
                        This project was done with the intent of 
                        <ol>
                            <li>diagnosing UCLA buildings that used significant quantities of electricity</li>
                            <li>training to handle data regarding club-made solar generator"</li>
                        </ol>
                    </Card>
                </div>
                <div style={{flex: 1}}>
                    <Row>
                        <Column>
                            <SimpleCard image={oneBigGraph} name="Covel Electricity Usage"/>
                        </Column>
                        <Column>
                            <SimpleCard image={oneGraphCode} name="code for Covel graph" />
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <SimpleCard image={fourGraphs} name="graphs for all 4 dining halls"/>
                        </Column>
                        <Column>
                            <SimpleCard image={fourGraphsCode} name="code for grid graphs"/>
                        </Column>
                    </Row>
                </div>
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
    fontFamily: "Avenir Next",
    boxShadow: "3px 3px 8px black", 
    fontSize: "20px",
    padding: "1%",
    marginLeft: "5%",
    backgroundColor: "white",
    borderRadius: "20px",
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