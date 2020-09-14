import React from "react";
import { styled } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import * as constants from "../../constants";
import "./infoArea.css";
import Slideshow from "./Slideshow";
// import { Desktop } from '../constants';
// import SlideshowMobile from './ProgramsPage/SlideShowMobile';

const InfoArea = (props) => {
  if (
    props.color === constants.LIGHT_PINK &&
    props.screensize === "MobilePortrait"
  )
    return (
      <ContainerDark flexDirection="column">
        <TextAreaMobile>
          <h4 className="info-header">{props.header}</h4>
          <ActualText>{props.text}</ActualText>
        </TextAreaMobile>

        {props.images && (
          <Slideshow images={props.images} screensize={props.screensize} />
        )}
      </ContainerDark>
    );
  if (props.color === constants.LIGHT_PINK && props.screensize === "Else")
    return (
      <ContainerDark flexDirection="row">
        <TextArea>
          <h4 className="info-header">{props.header}</h4>
          <ActualText>{props.text}</ActualText>
        </TextArea>
        {props.images && (
          <Slideshow images={props.images} screensize={props.screensize} />
        )}
      </ContainerDark>
    );
  if (
    props.color === constants.PINK_GRAY &&
    props.screensize === "MobilePortrait"
  )
    return (
      <ContainerLight flexDirection="column">
        <TextAreaMobile>
          <h4 className="info-header" style={{ color: constants.LIGHT_GRAY }}>
            {props.header}
          </h4>
          <ActualText style={{ color: constants.LIGHT_GRAY }}>
            {props.text}
          </ActualText>
        </TextAreaMobile>
        {props.images && (
          <Slideshow images={props.images} screensize={props.screensize} />
        )}
      </ContainerLight>
    );
  if (props.color === constants.PINK_GRAY && props.screensize === "Else")
    return (
      <ContainerLight flexDirection="row">
        <TextArea>
          <h4 className="info-header" style={{ color: constants.LIGHT_GRAY }}>
            {props.header}
          </h4>
          <ActualText style={{ color: constants.LIGHT_GRAY }}>
            {props.text}
          </ActualText>
        </TextArea>
        {props.images && (
          <Slideshow images={props.images} screensize={props.screensize} />
        )}
      </ContainerLight>
    );
};

const ContainerDark = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: constants.LIGHT_PINK,
  color: "black",
});

const ContainerLight = styled(Box)({
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  backgroundColor: constants.PINK_GRAY,
  color: "black",
});

const TextArea = styled(Box)({
  order: 0,
  display: "flex",
  flexDirection: "column",
  width: "50%",
  paddingTop: "5%",
  paddingBottom: "5%",
  paddingRight: "3%",
  paddingLeft: "3%",
});

const TextAreaMobile = styled(Box)({
  order: 0,
  display: "flex",
  flexDirection: "column",
  width: "90%",
  textAlign: "center",
  paddingTop: "5%",
  paddingBottom: "5%",
  paddingRight: "3%",
  paddingLeft: "3%",
});

const ActualText = styled("p")({
  fontFamily: "Abel",
  fontSize: "2rem",
});

export default InfoArea;
