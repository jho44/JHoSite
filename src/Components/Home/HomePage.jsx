import React, { Component } from "react"
import { styled } from "@material-ui/styles";
import * as constants from "../../constants"
import TopBar from "../MultiplePages/TopBar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./HomePage.css"

const profilepic=require("../../images/mesketch.jpg");

export default class HomePage extends Component {
    componentDidMount(){
        AOS.init({
            duration : 1500
        })
    }
    render() {
        return (
            <Container>
                <head>
                    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat" />
                    <meta name="viewport" content="width=device-width,initial-scale=1"/>
                </head>
                <TopBar history={this.props.history}/>
                <Header className="pretty-header">
                    J. Ho
                </Header>
                <AboutMe>
                    <img src={profilepic} alt="profile pic" className="profileimg" data-aos="fade-up" data-aos-anchor-placement="top-center"
                    style={{ 
                          width: "20%", height: "20%", float: "left", borderRadius: "50%", paddingTop: "5%", paddingBottom: "5%"
                          }} 
                    />
                    <Summary data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <h2>Greetings</h2>
                        Welcome to Jessica Ho's website. She's a UCLA CS Major. One summer, she decided to create this website to keep track of her progress on some projects and showcase her past works.
                    </Summary>
                    <MaintenanceNote  data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <h4 style={{paddingBottom: "0", margin: "0 0 0 0"}}>Maintenance Note:</h4>
                        <p>She's still working on making this website compatible with smaller-screened devices.</p>
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
        // "linear-gradient(to right, black 10%, #55555b 10% 20%, black 20% 80%, #55555b 80% 90%, black 90%)",
        "linear-gradient(to bottom, #929bd4, #1d083b)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 8vmin)",
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "500",
    textShadow: "5px 5px 5px black",
    // e4e4ee
    textAlign: "center",
    minHeight: "75vh"
    // paddingTop: "3%",
    // boxShadow: "0px 2px 5px gray"
})

const AboutMe = styled("body") ({
    paddingLeft: "5%",
    // paddingTop: "15%",
    // paddingBottom: "15%",
    display: "flex",
    alignItems: "center",
    zIndex: "-1000",
    backgroundImage: "linear-gradient(to right, #ffd6e8, #ffe9d6)",
    minHeight: "75vh"
    //textAlign: "center"
    //backgroundColor: constants.LIGHT_GRAY,
})

const Summary = styled("div") ({
    float: "left", 
    paddingLeft: "5%", 
    //paddingTop: "0", 
    width: "38%",
    fontFamily: "Montserrat",
    fontSize: "calc(5px + 2vmin)",
    color: "#242424"
    //fontWeight: 400
})

const MaintenanceNote = styled("div") ({
    float: "right",
    padding: "0 0 0 0",
    margin: "0 0 0 7%",
    fontFamily: "Avenir Next",
    width: "25%",
    color: constants.DARK_GRAY,
    fontSize: "calc(5px + 1vmin)"

})