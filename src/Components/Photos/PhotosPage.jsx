import React, {Component} from "react"
import TopBar from "../MultiplePages/TopBar"
import {styled} from "@material-ui/styles"
import * as constants from "../../constants"
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./photos.css"
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import "../MultiplePages/ScrollUpBtn.css"


// TODO: images that enlarge when clicked on
// maybe enable flip cards?

const BlackWhiteLight=require("../../images/blackwhitelamp.jpg");
const CakeHighAngle=require("../../images/cake.jpg");
const CakeLowAngle=require("../../images/cakelowangle.jpg");
const ChocoCake=require("../../images/chococake.jpg");
const Crystal=require("../../images/shiny_rock.jpg")
const Dumplings=require("../../images/dumplings.jpg");
const Eggs=require("../../images/eggs.jpg");
const IceCreamBlackWhite=require("../../images/icecreamblackwhite.jpg");
const IceCreamColor=require("../../images/icecreamcolor.jpg");
const Lamps=require("../../images/lamps.jpg");
const Macaroons=require("../../images/macaroons.jpg");
const MilkTeaGlass=require("../../images/milkteaglass.jpg");
const MilkTeaPlastic=require("../../images/milkteaplastic.jpg");
const MtFuji=require("../../images/mtfuji.jpg");
const Palace=require("../../images/palace.jpg");
const PalaceLandscape=require("../../images/palacelandscape.jpg");
const Pond=require("../../images/pond.jpg");
const Puff=require("../../images/puff.jpg");
const Skylight=require("../../images/skylight.jpg");
const SpookyStairs=require("../../images/spooky.jpg")
const Stairs=require("../../images/stairs.png")
const TotoroBowl=require("../../images/totorobowl.jpg")
const TotoroFigure=require("../../images/totorofigure.jpg");
const Umbrellas=require("../../images/umbrellas.jpg");

export default class PhotosPage extends Component {
    componentDidMount(){
        AOS.init({
            duration : 1500
        })
    }
    render() {
        return (
            <Container>
                <Content>
                    <TopBar history={this.props.history}/>
                    <ScrollUpButton style={{backgroundColor: constants.PINK_RED_ORANGE, borderRadius: "50%", padding: "10px", bottom: "17%"}}/>
                    <BigBox>
                        <Header data-aos="fade-up">
                            Since I did a stint in ROP's Photography class, I figured I may as well put the fruits of my labor here.
                        </Header>
                    </BigBox>
                        <Row className="gallery">
                            <Column className="col1">
                                <Pic src={TotoroFigure} alt="Totoro figurine" />
                                <Pic src={MilkTeaGlass} alt="milk tea in glass" />
                                <Pic src={ChocoCake} alt="chocolate cake" />
                                <Pic src={IceCreamBlackWhite} alt="ice cream in black and white" />
                                <Pic src={MilkTeaPlastic} alt="milk tea in plastic cup" />
                                <Pic src={MtFuji} alt="Mt. Fuji"  />
                                <Pic src={Umbrellas} alt="origami umbrellas" />
                                <Pic src={SpookyStairs} alt="spooky stairs" />
                            </Column>
                            <Column className="col2">
                                <Pic src={Lamps} alt="Smoko lamps"/>
                                <Pic src={BlackWhiteLight} alt="light in black and white"/>
                                <Pic src={Dumplings} alt="dumplings"/>
                                <Pic src={IceCreamColor} alt="ice cream"/>
                                <Pic src={Pond} alt="pond"/>
                                <Pic src={Puff} alt="cream puff"/>
                                <Pic src={Skylight} alt="skylight"/>
                                <Pic src={Stairs} alt="stairs in Apple"/>
                            </Column>
                            <Column className="col3">
                                <Pic src={CakeHighAngle} alt="cake from high angle"/>
                                <Pic src={CakeLowAngle} alt="cake from table level"/>
                                <Pic src={Eggs} alt="eggs in ramen"/>
                                <Pic src={Macaroons} alt="macaroons"/>
                                <Pic src={Palace} alt="palace"/>
                                <Pic src={PalaceLandscape} alt="palace landscape"/>
                                <Pic src={Crystal} alt="crystal"/>
                                <Pic src={TotoroBowl} alt="Totoro in terrarium"/>
                            </Column>
                        </Row>
                    </Content>
            </Container>
        )
    }
}

const Container = styled("div") ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "scroll",
})

const Content = styled("div") ({
    // backgroundColor: constants.DARK_GRAY,
})

const Header = styled("div") ({
    backgroundColor: constants.DARK_GRAY,
    color: "white",
    display: "flex",
    marginLeft: "30%",
    marginRight: "30%",
    padding: "2%",
    fontSize: "25px",
    fontFamily: "Avenir Next",
    borderStyle: "solid",
    borderColor: constants.LIGHT_PURPLE,
    textAlign: "center",
})

const BigBox = styled("div") ({
    height: "100vh",
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    backgroundImage: "radial-gradient(#ff6e9e, white)"

})

const Row = styled("div") ({
    display: "flex",
    //flexWrap: "wrap",
    justifyContent: "center",
    padding: "0 4px 4% 4px",
})

const Column = styled("div") ({
    flex: 1,
    maxWidth: "25%",
    padding: "0 2%",
})

const Pic = styled("img") ({
    marginTop: "16%",
    verticalAlign: "middle",
    width: "100%"
})