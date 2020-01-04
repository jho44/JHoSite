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

const images = [];
var BioPic = null;
export default class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            isFlipped: false
        }
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

    getBioPic(data) {
        for (const index in data) {
            let alt = data[index] && data[index]["alt"]
            console.log(alt)
            if (alt==="me")
            {
                BioPic=data[index]["hyperlink"]
                break
            }
        }
    }


    render() {
        const { data } = this.state
        return (
            <Container>
                <head>
                    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat" />
                    <meta name="viewport" content="width=device-width,initial-scale=1"/>
                </head>
                <TopBar history={this.props.history}/>
                {
                    this.fillImageArr(data, images)
                }
                <UpArrowBtn/>
                <BetterHeader>
                    <HeaderText data-aos="fade-right" style={{fontFamily: "Girassol", fontSize: "4rem"}}>J. Ho</HeaderText>
                    <HeaderText data-aos="fade-right" data-aos-delay="400" style={{fontFamily: "Dancing Script", fontSize: "3.5rem"}}>Off</HeaderText>
                    <HeaderText data-aos="fade-right" daa-aos-delay="800" style={{fontFamily: "Abel", fontSize: "2rem"}}>the</HeaderText>
                    <HeaderText data-aos="fade-right" data-aos-delay="1200" style={{fontFamily: "Courier Prime", fontSize: "3.6rem"}}>Clock</HeaderText>
                </BetterHeader>
                <BetterAboutMe>
                    {
                        this.getBioPic(data)
                    }
                    <FlipCard>
                        <Front>
                            <ImageThing data-aos="zoom-out" image={BioPic}/>
                            <TextFrontArea>
                                <TextFront>Maximum</TextFront>
                                <TextFront>Effort</TextFront>
                                <TextFront>J. Ho</TextFront>
                            </TextFrontArea>
                        </Front>
                        <Back>
                            <div>
                                I'm a UCLA CS Major. I got bored one day and decided to create this website to keep track of my progress on some projects and showcase my past works.
                            </div>
                        </Back>
                    </FlipCard>
                </BetterAboutMe>
            </Container>
        )
    }
}

const Front = styled("div") ({
    height: "100%",
    display: "flex",
})

const Back = styled("div") ({
    display: "flex",
    fontFamily: "Abel",
    fontSize: "25px"
})

const TextFront = styled("p") ({
    fontFamily: "Dancing Script",
    fontSize: "2rem",
    padding: "1rem 0",
    margin: 0
})

const TextFrontArea = styled("div") ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    paddingRight: "25px"
}) 

const ImageThing = bruh.div`
    background-image: url(${props => props.image});
    height: 100%;
    background-size: contain; 
    background-repeat: no-repeat;
    background-position: left center;
    flex-grow: 1;
    border-radius: 10px 10px 0;
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
    height: "95vh"
})

const Container = styled("div") ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "scroll",
})

