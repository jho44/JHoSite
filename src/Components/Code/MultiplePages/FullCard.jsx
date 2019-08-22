import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {ExpandMore} from '@material-ui/icons';
import "./card.css";

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: "10px 10px 0 0",
    boxShadow: "5px 5px 10px black",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function FullCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card} >
      <img src={props.image} style={{width: "100%"}}/>
      <CardContent style={{padding: 0, display: "flex"}}>
        <p className="card-name">{props.name}</p>
        <CardActions disableSpacing className="card-button">
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
      </CardContent>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Tis a paragraph.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

