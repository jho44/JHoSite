import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles, fade } from "@material-ui/core/styles";
import * as constants from "../../constants";

import clsx from "clsx";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// import { useAuth } from "../../context/auth";
import { useAuth } from "../../context/auth";

const screen = require("./screensize");

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    backgroundImage: "linear-gradient(to right, #ffd6e8, #ffe9d6)",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0 3px 10px #e4e4ee",
    opacity: 0.5,
    zIndex: 100,
  },
  understated: {
    position: "relative",
    backgroundColor: constants.LIGHT_GRAY,
    display: "flex",
    justifyContent: "flex-end",
    opacity: 0.5,
    zIndex: 100,
  },
  paper: {
    position: "absolute",
    top: "100",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  list: {
    width: 200,
    color: constants.LIGHT_GRAY,
  },
}));

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    margin: "1% 1rem",
    boxShadow: "0 2px 5px #806d6b",
    color: constants.PINK_GRAY,
    height: 48,
    padding: "0 30px",
    fontSize: "20px",
    fontFamily: "Avenir Next",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: fade(constants.LIGHT_PURPLE, 0.9),
      color: fade(constants.PINK_GRAY, 1),
    },
  },
})(Button);

const SmallerStyledButton = withStyles({
  root: {
    borderRadius: 3,
    background: "rgba(255,255,255, 0.8)",
    color: "black",
    height: 40,
    position: "relative",
    fontSize: "15px",
    fontFamily: "Avenir Next",
    fontWeight: 450,
    "&:hover": {
      backgroundColor: fade(constants.LIGHT_PURPLE, 1),
      color: fade(constants.PINK_GRAY, 1),
    },
  },
})(Button);

export default function TopBar(props) {
  const [open, setOpen] = useState(false);

  let screensize = screen.isMobilePortrait(document)
    ? "MobilePortrait"
    : "Else";
  const [orientation, setOrientation] = useState(screensize);
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [amIloggedIn, setLoginState] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      screensize = screen.isMobilePortrait(document)
        ? "MobilePortrait"
        : "Else";
      setOrientation(screensize);
    });
    return function cleanup() {
      window.removeEventListener("resize", () => {
        screensize = screen.isMobilePortrait(document)
          ? "MobilePortrait"
          : "Else";
        setOrientation(screensize);
      });
    };
  });

  const { getLoginStatus, setAuthTokens } = useAuth();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Photos", "Fun"].map((text, index) => (
          <ListItem button key={text.charAt(0).toUpperCase()}>
            <ListItemText
              style={{ color: "black", fontFamily: "Avenir Next" }}
              primary={text}
              onClick={() => props.history.push({ pathname: "/" + text })}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["iOS", "WebDev", "Python"].map(function (text, index) {
          let nextPage;
          if (text === "iOS") nextPage = "/code/mobiledev";
          else if (text === "WebDev") nextPage = "/code/webdev";
          else nextPage = "/code/pythondata";
          return (
            <ListItem button key={text}>
              <ListItemText
                style={{ color: "black", fontFamily: "Avenir Next" }}
                primary={text}
                onClick={() => props.history.push({ pathname: nextPage })}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  function anotherFuncBoi() {
    getLoginStatus().then((res) => setLoginState(res));
  }

  function appropoBar() {
    anotherFuncBoi();
    if (orientation === "MobilePortrait") {
      return (
        <div className={classes.understated}>
          <IconButton onClick={toggleDrawer("right", true)}>
            <MoreVertIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StyledButton
                onClick={() => props.history.push({ pathname: "/" })}
              >
                Home
              </StyledButton>
              <StyledButton onClick={handleClick} id="codebutton">
                Code
              </StyledButton>
              {open ? (
                <div
                  className={classes.paper}
                  style={{
                    left: document
                      .getElementById("codebutton")
                      .getBoundingClientRect().left,
                    top: document
                      .getElementById("codebutton")
                      .getBoundingClientRect().bottom,
                    width: parentWidth(document.getElementById("codebutton")),
                  }}
                >
                  <SmallerStyledButton
                    onClick={() =>
                      props.history.push({ pathname: "/code/mobiledev" })
                    }
                  >
                    Mobile Dev
                  </SmallerStyledButton>
                  <SmallerStyledButton
                    onClick={() =>
                      props.history.push({ pathname: "/code/webdev" })
                    }
                  >
                    Web Dev
                  </SmallerStyledButton>
                  <SmallerStyledButton
                    style={{ height: 60 }}
                    onClick={() =>
                      props.history.push({ pathname: "/code/pythondata" })
                    }
                  >
                    Python - Data
                  </SmallerStyledButton>
                </div>
              ) : null}
              <StyledButton
                onClick={() => props.history.push({ pathname: "/photos" })}
              >
                Photos
              </StyledButton>
              {/* <StyledButton onClick={() => props.history.push({ pathname: "/test" })}>
                        Test
                    </StyledButton> */}
              <StyledButton
                onClick={() => props.history.push({ pathname: "/fun" })}
              >
                FUN
              </StyledButton>
              {amIloggedIn && (
                <StyledButton
                  style={{ order: 5 }}
                  onClick={() => setAuthTokens(null)}
                >
                  Log Out
                </StyledButton>
              )}
            </div>
          </ClickAwayListener>
        </div>
      );
    }
  }

  return <Router>{appropoBar()}</Router>;
}

function parentWidth(elem) {
  return elem.clientWidth;
}
