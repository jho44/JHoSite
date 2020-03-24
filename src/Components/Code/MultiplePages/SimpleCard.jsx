import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./card.css"

export default function SimpleCard(props) {

  return (
    <Card style={{ margin: "2rem 0.1rem"}}>
      <img src={props.image} style={{width: "100%"}}/>
      <CardContent style={{display: "flex", padding: "0.2rem", overflow: "hidden", justifyContent: "center"}}>
        <p className="card-name">
          {props.name}
        </p>
      </CardContent>
    </Card>
  );
}

