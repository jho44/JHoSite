import React, { Component } from "react"
import { styled } from "@material-ui/styles";
import * as constants from "../../constants"
import TopBar from "../MultiplePages/TopBar"

const profilepic=require("../../images/mesketch.jpg");

export default class HomePage extends Component {
    render() {
        return (
            <Container>
                <head>
                    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand" />
                </head>
                <TopBar history={this.props.history}/>
                <Header>J. Ho</Header>
                <AboutMe>
                    <img src={profilepic} alt="profile pic" style={{ 
                          width: "20%", height: "20%", float: "left", borderRadius: "50%"}} />
                    <Summary>
                        <h2>Greetings</h2>
                        Welcome to Jessica Ho's website. She's a UCLA CS Major. One summer, she decided to create this website to keep track of her progress on some projects and showcase her past works.
                    </Summary>
                    <MaintenanceNote>
                        <h4 style={{paddingBottom: "0", margin: "0 0 0 0"}}>Maintenance Note:</h4>
                        <p>She's still working on making this website compatible with smaller-screened devices.</p>
                        <p>This heading was NOT made with Waluigi's suspenders in mind.</p>
                        <p>Picture created using PhotoFunia.</p>
                        <p>Plan to enable enlarging pictures when clicked.</p>
                    </MaintenanceNote>
                </AboutMe>
            </Container>
        )
    }
}

const Container = styled("div") ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "scroll"
})

// light purple #dbb4ff
const Header = styled("div") ({
    backgroundImage: 
        "linear-gradient(to right, black 10%, #55555b 10% 20%, black 20% 80%, #55555b 80% 90%, black 90%)",
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 8vmin)",
    color: "white",
    fontFamily: "Quicksand",
    fontWeight: "500",
    textShadow: "3px 3px 5px #e4e4ee",
    textAlign: "center",
    paddingTop: "3%",
    boxShadow: "2px 2px 5px gray"
})

const AboutMe = styled("body") ({
    paddingLeft: "15%",
    paddingTop: "3%",
    paddingBottom: "3%",
    //backgroundColor: constants.LIGHT_GRAY,
})

const Summary = styled("div") ({
    float: "left", 
    paddingLeft: "5%", 
    paddingTop: "0", 
    width: "38%",
    fontFamily: "Avenir Next",
    fontSize: "25px"
})

const MaintenanceNote = styled("div") ({
    float: "right",
    padding: "0 2% 0 0",
    margin: "0 0 0 0",
    fontFamily: "Avenir Next",
    width: "25%",
    color: constants.DARK_GRAY
})