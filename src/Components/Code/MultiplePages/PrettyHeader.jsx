import React, { Component } from "react"
import * as constants from "../../../constants"
import {styled} from "@material-ui/styles"

export default class PrettyHeader extends Component {
    render() {
        return (
            <Elem>{this.props.name}</Elem>
        )
    }
}

const Elem = styled("h1") ({
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: constants.LIGHT_PURPLE,
    padding: "0.5%", 
    margin: "2%",
    marginLeft: 0,
    height: "fit-content",
    width: "fit-content"
})