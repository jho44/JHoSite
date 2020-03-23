import React, { Component } from "react"
import { styled } from "@material-ui/styles";
import TopBar from "../MultiplePages/TopBar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./HomePage.css"
import UpArrowBtn from "../MultiplePages/UpArrowBtn"
import Tabletop from "tabletop"
import FlipCard from "react-flipcard-2"
import bruh from 'styled-components';
import { MobilePortrait, MobileLandscape, Desktop, Medium } from '../../constants';
import MediaQuery from "react-responsive"

const images = [];
var BioPic = null;
const me = require("./me.jpg")

export default class HomePage extends Component {

    constructor() {
        super()
        const isPortrait = () => {
            const heightOutput = document.documentElement.clientHeight;
            const widthOutput = document.documentElement.clientWidth;
            return heightOutput >= widthOutput
        }    
        
        this.state = {
            data: [],
            isFlipped: false,
            orientation: isPortrait() ? "portrait" : "landscape"
        }
        // Dimensions.addEventListener("change", () => {
        //     this.setState({
        //         orientation: isPortrait() ? "portrait" : "landscape"
        //     })
        // })
        window.addEventListener("resize", () => {
            this.setState({
                orientation: isPortrait() ? "portrait" : "landscape"
            })
        });

    }


    
    componentDidMount(){
        AOS.init({
            duration : 1500
        })

        Tabletop.init({
            key: "16rdCKoh-gYgkKDiC8Mq2A_lpdDB4V7tKgto893t9LRs",
            callback: googleData => {
                this.setState({
                    data: googleData, 
                    
                })
            },
            simpleSheet: true
        })
    }

    fillImageArr(data, images) {
        for (const index in data) {
            let link = data[index] && data[index]["hyperlink"]
            images.push(link)
        }
    }

    showBack() {
        this.setState({
            isFlipped: true
        });
    }
  
    showFront() {
        this.setState({
            isFlipped: false
        });
    }


    // getBioPic(data) {
    //     for (const index in data) {
    //         let alt = data[index] && data[index]["alt"]
    //         if (alt==="me")
    //         {
    //             BioPic=data[index]["hyperlink"]
    //             break
    //         }
    //     }
    // }

    render() {
        const { data } = this.state
        this.fillImageArr(data, images)
        if (this.state.orientation === "landscape") {
            return(
                <Container>
                    <head>
                    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat" />
                    <meta name="viewport" content="width=width, initial-scale=1, minimum-scale=1" />

                    </head>
                    <TopBar history={this.props.history}/>
                    
                    <MediaQuery query = "(max-width: 896px)">
                        <BetterHeader style={{height: "90vh"}}>
                            <HeaderText data-aos="fade-right" style={{fontFamily: "Girassol", fontSize: "2.5rem", padding: "0.5rem"}}>J. Ho</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="400" style={{fontFamily: "Dancing Script", fontSize: "2.5rem", padding: 0}}>Off</HeaderText>
                            <HeaderText data-aos="fade-right" daa-aos-delay="800" style={{fontFamily: "Abel", fontSize: "1rem", padding: "0.8rem", paddingBottom: 0}}>the</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="1000" data-aos-anchor-placement="bottom-bottom" style={{fontFamily: "Courier Prime", fontSize: "2.6rem", padding: "0.5rem"}}>Clock</HeaderText>
                        </BetterHeader>
                        <BetterAboutMe style={{padding: "2rem 0"}}>
                        <FlipCard>
                                <Front>
                                    <ImageThing style={{height: "100%", borderRadius: "10px 0 0 10px"}} image={me}/>
                                    <TextFrontArea style={{flexGrow: 0.4}}>
                                        <TextFront>Maximum</TextFront>
                                        <TextFront>Effort</TextFront>
                                        <TextFront>J. Ho</TextFront>
                                    </TextFrontArea>
                                </Front>
                                <Back>
                                    I'm a UCLA CS Major. I got bored one day and decided to create this website to keep track of my progress on some projects and showcase my past works.
                                </Back>
                            </FlipCard>
                        </BetterAboutMe>
                    </MediaQuery>
                    <MediaQuery query = "(min-width: 1025px)">
                        <UpArrowBtn/>
                        <BetterHeader style={{height: "90vh"}}>
                            <HeaderText data-aos="fade-right" style={{fontFamily: "Girassol", fontSize: "4rem"}} >J. Ho</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="400" style={{fontFamily: "Dancing Script", fontSize: "3.5rem"}} >Off</HeaderText>
                            <HeaderText data-aos="fade-right" daa-aos-delay="800" style={{fontFamily: "Abel", fontSize: "2rem"}} >the</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="1200" style={{fontFamily: "Courier Prime", fontSize: "3.6rem"}} >Clock</HeaderText>
                        </BetterHeader>
                        <BetterAboutMe>
                            <FlipCard>
                                <Front>
                                    <ImageThing style={{height: "100%", borderRadius: "10px 0 0 10px", }} image={me}/>
                                    <TextFrontArea style={{flexGrow: 0.3}}>
                                        <TextFront>Maximum</TextFront>
                                        <TextFront>Effort</TextFront>
                                        <TextFront>J. Ho</TextFront>
                                    </TextFrontArea>
                                </Front>
                                <Back>
                                    I'm a UCLA CS Major. I got bored one day and decided to create this website to keep track of my progress on some projects and showcase my past works.
                                </Back>
                            </FlipCard>
                        </BetterAboutMe>
                    {/* </Desktop> */}
                    </MediaQuery>
                    <Medium>
                        <BetterHeader style={{height: "90vh"}}>
                            <HeaderText data-aos="fade-right" style={{fontFamily: "Girassol", fontSize: "4rem"}}>J. Ho</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="400" style={{fontFamily: "Dancing Script", fontSize: "3.5rem"}}>Off</HeaderText>
                            <HeaderText data-aos="fade-right" daa-aos-delay="800" style={{fontFamily: "Abel", fontSize: "2rem"}}>the</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="1200" style={{fontFamily: "Courier Prime", fontSize: "3.6rem"}}>Clock</HeaderText>
                        </BetterHeader>
                        <BetterAboutMe style={{padding: "2rem 0"}}>
                        <FlipCard>
                                <Front>
                                    <ImageThing style={{height: "100%", borderRadius: "10px 0 0 10px", backgroundPosition: "top center"}} image={me}/>
                                    <TextFrontArea style={{flexGrow: 0.4}}>
                                        <TextFront>Maximum</TextFront>
                                        <TextFront>Effort</TextFront>
                                        <TextFront>J. Ho</TextFront>
                                    </TextFrontArea>
                                </Front>
                                <Back>
                                    I'm a UCLA CS Major. I got bored one day and decided to create this website to keep track of my progress on some projects and showcase my past works.
                                </Back>
                            </FlipCard>
                        </BetterAboutMe>
                    </Medium>
                </Container>
            )
        }
        else {
            return (
                <Container>
                    <head>
                    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat" />
                    <meta name="viewport" content="width=width, initial-scale=1, minimum-scale=1" />

                    </head>
                    <TopBar history={this.props.history}/>
                    
                    <MobilePortrait>
                        <BetterHeader style={{height: "95vh"}}>
                            <HeaderText data-aos="fade-right" style={{fontFamily: "Girassol", fontSize: "3.5rem"}}>J. Ho</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="400" style={{fontFamily: "Dancing Script", fontSize: "3rem"}}>Off</HeaderText>
                            <HeaderText data-aos="fade-right" daa-aos-delay="800" style={{fontFamily: "Abel", fontSize: "1.5rem"}}>the</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="1200" style={{fontFamily: "Courier Prime", fontSize: "3.1rem"}}>Clock</HeaderText>
                        </BetterHeader>
                        <BetterAboutMe>
                            <FlipCard>
                                <MobileFront>
                                    <ImageThing style={{marginTop: "5%", marginBottom: "4%", width: "80%"}} image={me}/>
                                    <TextFrontArea>
                                        <TextFront>Maximum</TextFront>
                                        <TextFront>Effort</TextFront>
                                        <TextFront>J. Ho</TextFront>
                                    </TextFrontArea>
                                </MobileFront>
                                <Back>
                                    I'm a UCLA CS Major. I got bored one day and decided to create this website to keep track of my progress on some projects and showcase my past works.
                                </Back>
                            </FlipCard>
                        </BetterAboutMe>
                    </MobilePortrait>
                    <Desktop>
                        <UpArrowBtn/>
                        <BetterHeader style={{height: "90vh"}}>
                            <HeaderText data-aos="fade-right" style={{fontFamily: "Girassol", fontSize: "4rem"}} >J. Ho</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="400" style={{fontFamily: "Dancing Script", fontSize: "3.5rem"}} >Off</HeaderText>
                            <HeaderText data-aos="fade-right" daa-aos-delay="800" style={{fontFamily: "Abel", fontSize: "2rem"}} >the</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="1200" style={{fontFamily: "Courier Prime", fontSize: "3.6rem"}} >Clock</HeaderText>
                        </BetterHeader>
                        <BetterAboutMe>
                            <FlipCard>
                                <Front>
                                    <ImageThing style={{height: "100%", borderRadius: "10px 0 0 10px", }} image={me}/>
                                    <TextFrontArea style={{flexGrow: 0.3}}>
                                        <TextFront>Maximum</TextFront>
                                        <TextFront>Effort</TextFront>
                                        <TextFront>J. Ho</TextFront>
                                    </TextFrontArea>
                                </Front>
                                <Back>
                                    I'm a UCLA CS Major. I got bored one day and decided to create this website to keep track of my progress on some projects and showcase my past works.
                                </Back>
                            </FlipCard>
                        </BetterAboutMe>
                    </Desktop>
                    <Medium>
                        <BetterHeader style={{height: "90vh"}}>
                            <HeaderText data-aos="fade-right" style={{fontFamily: "Girassol", fontSize: "4rem"}}>J. Ho</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="400" style={{fontFamily: "Dancing Script", fontSize: "3.5rem"}}>Off</HeaderText>
                            <HeaderText data-aos="fade-right" daa-aos-delay="800" style={{fontFamily: "Abel", fontSize: "2rem"}}>the</HeaderText>
                            <HeaderText data-aos="fade-right" data-aos-delay="1200" style={{fontFamily: "Courier Prime", fontSize: "3.6rem"}}>Clock</HeaderText>
                        </BetterHeader>
                        <BetterAboutMe style={{padding: "2rem 0"}}>
                        <FlipCard>
                                <Front>
                                    <ImageThing style={{height: "100%", borderRadius: "10px 0 0 10px", backgroundPosition: "top center"}} image={me}/>
                                    <TextFrontArea style={{flexGrow: 0.4}}>
                                        <TextFront>Maximum</TextFront>
                                        <TextFront>Effort</TextFront>
                                        <TextFront>J. Ho</TextFront>
                                    </TextFrontArea>
                                </Front>
                                <Back>
                                    I'm a UCLA CS Major. I got bored one day and decided to create this website to keep track of my progress on some projects and showcase my past works.
                                </Back>
                            </FlipCard>
                        </BetterAboutMe>
                    </Medium>
                </Container>
            )
        }
    }
}

const Front = styled("div") ({
    height: "100%",
    display: "flex",
})

const MobileFront = styled("div") ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
})

const Back = styled("div") ({
    display: "flex",
    fontFamily: "Abel",
    fontSize: "25px",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
})

const TextFront = styled("p") ({
    fontFamily: "Dancing Script",
    fontSize: "1.8rem",
    padding: "0.5rem 0",
    margin: 0
})

const TextFrontArea = styled("div") ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    // flexGrow: 0.5,
    // paddingRight: "25px"
}) 

const ImageThing = bruh.div`
    background-image: url(${props => props.image});
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: left center;
    flex-grow: 1;
`

const HeaderText = styled("p") ({
    padding: "2rem 0",
    margin: 0,
})

const BetterAboutMe = styled("div") ({
    backgroundImage: "linear-gradient(to right, #ffd6e8, #ffe9d6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    height: "90vh"
})

const BetterHeader = styled("div") ({
    backgroundImage: "linear-gradient(to right, #ffd6e8, #ffe9d6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

const Container = styled("div") ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "scroll",
})