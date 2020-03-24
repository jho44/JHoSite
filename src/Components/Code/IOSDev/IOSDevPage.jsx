import React, { Component } from "react"
import TopBar from "../../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../../constants"

import AOS from 'aos';
import 'aos/dist/aos.css';
import UpArrowBtn from "../../MultiplePages/UpArrowBtn"
import InfoArea from "../../MultiplePages/InfoArea"

const launchscreen = require("../IOSDev/ios_pics/launchscreen.png");
const main_menu = require("../IOSDev/ios_pics/main_menu.png");
const dropdown_menu = require("../IOSDev/ios_pics/dropdown_menu.png");
const current_session = require("../IOSDev/ios_pics/current_session.png");
const settings = require("../IOSDev/ios_pics/settings.png");
const app_icon = require("../IOSDev/ios_pics/appicon.png");

const infoArray = [
	{
		header: 'DingDing',
		color: constants.CREME,
		text: "An alarm to use while working out. Tells you when to keep moving and when to rest.",
        align: 'left',
		images: [
			launchscreen, main_menu, dropdown_menu, current_session, settings, app_icon
		]
    }
]

export default class IOSDevPage extends Component {

    constructor() {
        super()
        /* 
            for this page, just care about
            difference b/t portrait mobile mode 
            and everything else

            portrait mobile mode == flexdirection column
            everything else == flexdirection row (or row reverse?)
        */
        const isMobilePortrait = () => {
            const heightOutput = document.documentElement.clientHeight;
            const widthOutput = document.documentElement.clientWidth;
            return heightOutput>=widthOutput && widthOutput <= 414
        }    
        
        this.state = {
            screensize: isMobilePortrait() ? "MobilePortrait" : "Else"
        }
    
        window.addEventListener("resize", () => {
            this.setState({
                screensize: isMobilePortrait() ? "MobilePortrait" : "Else"
            })
        });
    }

    componentDidMount(){
        AOS.init({
            duration : 1500
        })
    }
    render() {
        return (
            <Container>
                <TopBar history={this.props.history}/>
]
                <InfoContainer order={2}>
                    {infoArray.map(info => {
                        console.log(this.state.screensize);
                        return (
                            <InfoArea
                                header={info.header}
                                color={info.color}
                                text={info.text}
                                align={info.align}
                                images={info.images}
                                screensize={this.state.screensize}
                            />
                        );
                    })}
                </InfoContainer>
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

const InfoContainer = styled('div')({
	order: 1,
	flex: 1
})