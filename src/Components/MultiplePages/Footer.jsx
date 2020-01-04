import React from "react"
import { styled } from "@material-ui/styles"
import * as constants from "../../constants"

const Footer = () => {
    return (
        <GrayDiv>
            <Container>
                <BannerText1>Made for funsies</BannerText1>
                <BannerText2>Contact me with <Mailto href="mailto:jessicaho44@g.ucla.edu">this</Mailto></BannerText2>
                <BannerText3>Copyright © OffTheClockJHo 2020</BannerText3>
            </Container>
        </GrayDiv>
    )
}

const GrayDiv = styled("div") ({
    backgroundColor: constants.DARK_GRAY,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2% 0",
    //minWidth: "400px",
    boxShadow: "inset 0px 3px 5px #e4e4ee",

})

const Container = styled("div") ({
    order: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    fontFamily: "Avenir Next"
})

const BannerText1 = styled("p") ({
    color: constants.LIGHT_GRAY,
    order: 0,
    padding: "0 0 0 0",
    margin: "0 0 0 0"
})

const BannerText2 = styled("p") ({
    color: constants.LIGHT_GRAY,
    order: 1,
    padding: "1% 0",
    margin: "0 0 0 0"
})

const BannerText3 = styled("p") ({
    color: constants.LIGHT_GRAY,
    order: 2,
    padding: "0 0 0 0",
    margin: "0 0 0 0"
})

const Mailto = styled("a") ({
    color: constants.LIGHT_GRAY
})
export default Footer