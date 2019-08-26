import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./card.css"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: "10px 10px 0 0",
    boxShadow: "5px 5px 10px black",
},
}));

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} >
      <img src={props.image} style={{width: "100%"}}/>
      <CardContent style={{padding: "5%", paddingLeft:0, display: "block", overflow: "hidden"}}>
        <p className="card-name">
          {props.name}
        </p>
      </CardContent>
    </Card>
  );
}

