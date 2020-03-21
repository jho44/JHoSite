import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./card.css"

// const useStyles = makeStyles(theme => ({
//   card: {
//     // borderRadius: "10px 10px 0 0",
//     // boxShadow: "5px 5px 10px black",
// },
// }));

export default function SimpleCard(props) {
  // const classes = useStyles();

  return (
    <Card style={{ margin: "5rem 10rem"}}>
      <img src={props.image} style={{width: "100%"}}/>
      <CardContent style={{display: "flex", padding: "0.2rem", overflow: "hidden", justifyContent: "center"}}>
        <p className="card-name">
          {props.name}
        </p>
      </CardContent>
    </Card>
  );
}

