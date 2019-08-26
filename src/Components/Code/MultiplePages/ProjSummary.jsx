import React, { Component } from "react"
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
    fontFamily: "Avenir Next",
    boxShadow: "3px 3px 8px black", 
    fontSize: "20px",
    padding: "1%",
    marginLeft: "5%",
    backgroundColor: "white",
    borderRadius: "20px",
})

export default ProjSummary