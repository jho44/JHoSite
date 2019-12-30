import React from "react"
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        color: "white"
    },
  }));
  

export default function BtnContent() {
    const classes = useStyles();

    return (
        <div>
            <KeyboardArrowUpIcon className={classes.root}/>
        </div>
    )
}

