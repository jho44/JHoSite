import React, { Component } from "react"
import TopBar from "../../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../../constants"
import ProjHeader from "../MultiplePages/ProjHeader"
import FullCard from "../MultiplePages/FullCard"
import SimpleCard from "../MultiplePages/SimpleCard"
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
    componentDidMount(){
        AOS.init({
          duration : 1500
        })
      }
    render() {
        return (
            <Container>
                <TopBar history={this.props.history}/>
                <UpArrowBtn/>
                {/* <ProjHeader name="WorkItLoud App" text="An alarm to use while working out. Tells you when to keep moving and when to rest." /> */}

                <InfoContainer order={2}>
					{infoArray.map(info => {
						console.log(info);
						return (
							<InfoArea
								header={info.header}
								color={info.color}
								text={info.text}
								align={info.align}
								images={info.images}
							/>
						);
					})}
				</InfoContainer>
                {/* <div style={{flex: 1}} data-aos="fade-up">
                    <Row>
                        <Column>
                            <SimpleCard image={launchscreen} name="launchscreen" />
                        </Column>
                        <Column>
                            <FullCard image={main_menu} name="main menu" text="From here, you can go to the settings page and/or choose how many stages you want per set. Once chosen, click on the power button to start your workout session." />
                        </Column>
                        <Column>
                            <SimpleCard image={dropdown_menu} name="dropdown menu" />
                        </Column>
                        <Column>
                            <FullCard image={current_session} name="current session" text="If you choose 3 stages per set, the big number will increment after every 3 stages. Stages would go from green to yellow to red. Press on the power button to stop your workout session." />
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <FullCard image={settings} name="settings" text="Choose how long you want each stage to be. Default times are shown above." />
                        </Column>
                        <Column>
                            <SimpleCard image={app_icon} name="app icon" />
                        </Column>
                    </Row>
                </div> */}
            </Container>
        )
    }
}

// maybe put in separate css folder b/c copied from Photos page
const Row = styled("div") ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 0,
    paddingBottom: "2%"
    // borderStyle: "solid",
    // borderColor: "black"
})

const Column = styled("div") ({
    flex: "25%",
    maxWidth: "15%",
    padding: "0 2%"
})

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