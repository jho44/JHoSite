import React, { Component } from "react"
import * as constants from "../../../constants"
import {styled} from "@material-ui/styles"
import ProjSummary from "./ProjSummary"
import PrettyHeader from "./PrettyHeader"

class ProjHeader extends Component {
    render() {
        return (
            <Container>
                <PrettyHeader name={this.props.name}/>
                <ProjSummary text={this.props.text}/>
            </Container>
        )
    }
}

const Container = styled("div") ({
    display: "flex",
    alignItems: "center",
    padding: "1%",
    paddingLeft: 0,
})

// const PrettyHeader = styled("h1") ({
//     borderStyle: "solid",
//     borderColor: "white",
//     backgroundColor: constants.LIGHT_PURPLE,
//     padding: "0.5%", 
//     margin: "2%",
//     marginLeft: 0,
//     flexWrap: "wrap"
// })

export default ProjHeader