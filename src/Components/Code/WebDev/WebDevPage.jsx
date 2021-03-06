import React, { Component } from "react"
import TopBar from "../../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../../constants"
import UpArrowBtn from "../../MultiplePages/UpArrowBtn"
import InfoArea from "../../MultiplePages/InfoArea"

const infoArray = [
	{
		header: 'designcreatesolar.com',
		color: constants.LIGHT_PINK,
		text: "I'm a Project Engineer of UCLA's SOLAR club -- helped build and maintain club's website",
        align: 'left'
    }
]

export default class WebDevPage extends Component {
    constructor() {
        super() 
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
    render() {
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <UpArrowBtn/>
                    <InfoContainer order={2}>
                        {infoArray.map(info => {
                            return (
                                <InfoArea
                                    header={info.header}
                                    color={info.color}
                                    text={info.text}
                                    align={info.align}
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