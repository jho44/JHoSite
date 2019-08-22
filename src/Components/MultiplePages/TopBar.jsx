import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router } from "react-router-dom"
import { withStyles, fade } from "@material-ui/core/styles"
import * as constants from "../../constants"

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    backgroundColor: constants.DARK_GRAY,
    padding: "0.5%",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0 3px 10px #e4e4ee",
    //width: "100%"
  },
  paper: {
    position: 'absolute',
    top: "100",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}));

const StyledButton = withStyles({
    root: {
        borderRadius: 3,
        borderStyle:"solid",
        borderWidth: 0,
        borderColor: "white",
        color: "white",
        height: 48,
        padding: "0 30px",
        fontSize: "20px", 
        fontFamily: "Avenir Next",
        fontWeight: 500,
        "&:hover": {
            backgroundColor: fade(constants.LIGHT_PURPLE, 0.9),
            color: fade(constants.DARK_GRAY, 1)
        }
    }
})(Button);

const SmallerStyledButton = withStyles({
    root: {
        borderRadius: 3,
        //border: 10,
        backgroundColor: "white",
        color: constants.DARK_GRAY,
        height: 40,
        borderColor: "black",
        borderWidth: "1px",
        borderStyle: "solid",
        position: "relative",
        fontSize: "15px", 
        fontFamily: "Avenir Next",
        fontWeight: 450,
        "&:hover": {
            backgroundColor: fade(constants.LIGHT_PURPLE, 1),
            color: fade(constants.DARK_GRAY, 1)
        }
    }
})(Button);


export default function TopBar(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
    //document.getElementById("codebutton").style.borderWidth = "2px";
  };

  
  const handleClickAway = () => {
    setOpen(false);
    //document.getElementById("codebutton").style.borderWidth = 0;
  };

  const fake = <div className={classes.fake} />;

  return (
    <Router>
        <div className={classes.root}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                    <StyledButton onClick={() => props.history.push({ pathname: "/" })}>
                        Home
                    </StyledButton>
                    <StyledButton onClick={handleClick} id="codebutton">Code</StyledButton>
                    {open ? (
                        <div className={classes.paper} style={{left: document.getElementById("codebutton").getBoundingClientRect().left, width: parentWidth(document.getElementById("codebutton"))}}>
                            <SmallerStyledButton onClick={() => props.history.push({ pathname: "/code/iosdev" })}>
                                iOS Dev
                            </SmallerStyledButton> 
                            <SmallerStyledButton onClick={() => props.history.push({ pathname: "/code/test" })}>
                                Web Dev
                            </SmallerStyledButton>
                            <SmallerStyledButton style={{height: 60}}>Python - Data</SmallerStyledButton>
                        </div>
                    ) : null}
                    <StyledButton onClick={() => props.history.push({ pathname: "/photos" })}>
                        Photos
                    </StyledButton>
                </div>
            </ClickAwayListener>
        </div>
    </Router>
  );
}

function parentWidth(elem) {
    return elem.clientWidth;
}
