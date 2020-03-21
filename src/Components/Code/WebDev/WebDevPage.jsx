import React, { Component } from "react"
import TopBar from "../../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../../constants"
import UpArrowBtn from "../../MultiplePages/UpArrowBtn"
import InfoArea from "../../MultiplePages/InfoArea"

const app_icon = require("../IOSDev/ios_pics/appicon.png");

const infoArray = [
	{
		header: 'designcreatesolar.com',
		color: constants.LIGHT_PINK,
		text: "I'm a Project Engineer of UCLA's SOLAR club -- helped build and maintain club's website",
        align: 'left',
		images: [app_icon
		]
    }
]

export default class IOSDevPage extends Component {
    render() {
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <UpArrowBtn/>
                    <InfoContainer order={2}>
                        {infoArray.map(info => {
                            // console.log(info);
                            return (
                                <InfoArea
                                    header={info.header}
                                    color={info.color}
                                    text={info.text}
                                    align={info.align}
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