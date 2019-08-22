import React, { Component } from "react"
import TopBar from "../../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../../constants"
import ProjHeader from "../MultiplePages/ProjHeader"
import ProjSummary from "../MultiplePages/ProjSummary"
import FullCard from "../MultiplePages/FullCard"
import SimpleCard from "../MultiplePages/SimpleCard"
import "./ios.css"
import Footer from "../../MultiplePages/Footer"

const launchscreen = require("../IOSDev/ios_pics/launchscreen.png");
const main_menu = require("../IOSDev/ios_pics/main_menu.png");
const dropdown_menu = require("../IOSDev/ios_pics/dropdown_menu.png");
const current_session = require("../IOSDev/ios_pics/current_session.png");
const settings = require("../IOSDev/ios_pics/settings.png");

export default class IOSDevPage extends Component {
    render() {
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <ProjHeader name="WorkItLoud App" text="An alarm to use while working out. Tells you when to keep moving and when to rest."/>
                <div className="grid-container">
                    <SimpleCard image={launchscreen} name="launchscreen" id="first-boyo"/>
                    <FullCard image={main_menu} name="main menu"/>
                    <SimpleCard image={dropdown_menu} name="dropdown menu"/>
                    <FullCard image={current_session} name="current session"/>
                    <FullCard image={settings} name="settings" className="fifth"/>
                </div>
            </Container>
        )
    }
}

// const GridContainer = styled("div") ({
//     // display: "grid",
//     // gridTemplateColumns: "repeat(4, 1fr)",
//     // gridColumnGap: "5%",
//     // gridRowGap: "2%",
//     // padding: "0 2%"
//     display: "flex",
//     paddingBottom: "2%",
//     margin: "5%"
// })

const ProjTop = styled("div") ({
    display: "flex",
    //borderStyle: "solid"
})

// maybe put in separate css folder b/c copied from Photos page
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
    maxWidth: "20%",
    padding: "0 2%"
})

const Project = styled("div") ({
    position: "relative",
    //zIndex: "-1",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
})

const Container = styled("div") ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "scroll",
    backgroundColor: constants.DARK_GRAY,
    paddingBottom: "2%"
})
