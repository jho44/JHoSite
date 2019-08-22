import React, { Component } from "react"
import * as constants from "../../../constants"
import {styled} from "@material-ui/styles"

class ProjSummary extends Component {
    render() {
        return (
            <Card>
                {this.props.text}
            </Card>
        )
    }
}

const Card = styled("div") ({
    display: "block",
    marginTop: "auto",
    marginBottom:"auto",
    boxShadow: "3px 3px 8px black", 
    width: "20%",
    fontSize: "20px",
    padding: "1%",
    marginLeft: "5%",
    backgroundColor: "white",
    borderRadius: "20px",
    height: "20%"
})

export default ProjSummary