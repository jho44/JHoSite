import React, { Component } from "react"
import TopBar from "../../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../../constants"
import ProjHeader from "../MultiplePages/ProjHeader"
import UpArrowBtn from "../../MultiplePages/UpArrowBtn"

export default class IOSDevPage extends Component {
    render() {
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <UpArrowBtn/>
                <ProjHeader name="My site" text="This website is my baby. I'll be sure to get her through puberty on my next break."/>
                <ProjHeader name="Design Create Solar Website" text="I'm a Project Engineer of the Design Create Solar club at UCLA and I'm one of the incubators for our baby club's infant website: designcreatesolar.com."/>
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
