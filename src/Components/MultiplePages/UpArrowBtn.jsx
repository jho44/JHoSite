import React, { Component } from "react"
import ScrollUpButton from "react-scroll-up-button"
import "./ScrollUpBtn.css"
import BtnContent from "./BtnContent"

export default class UpArrowBtn extends Component {
    render() {
      return (
        <div>
          <ScrollUpButton
            ContainerClassName="AnyClassForContainer"
            TransitionClassName="AnyClassForTransition"
          >
            <BtnContent/>
          </ScrollUpButton>
        </div>
      );
    }
  }