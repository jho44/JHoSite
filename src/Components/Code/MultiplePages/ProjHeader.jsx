import React, { Component } from "react"
import * as constants from "../../../constants"
import {styled} from "@material-ui/styles"


class ProjHeader extends Component {
    render() {
        return (
            <PrettyHeader>{this.props.name}</PrettyHeader>
        )
    }
}

const PrettyHeader = styled("h1") ({
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: constants.LIGHT_PURPLE,
    padding: "0.5%", 
    margin: "2%",
    marginLeft: 0,
    width: "fit-content"
})

export default ProjHeader