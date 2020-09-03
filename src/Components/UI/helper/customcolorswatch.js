import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function CustomColorSwatch(props) {
  let size = null
  switch(props.size){
    case "LARGE":
      size = 35;
      break;
    case "MEDIUM":
      size = 25;
      break;
    case "SMALL":
      size = 15;
      break;
    default:
      console.log(props.size);
  }

  const useStyles = makeStyles({
      root: {
        hover:{'background-color':props.color},
        background: props.color,
        borderRadius: 0,
        border: 0,
        color: props.color,
        maxHeight: size,
        maxWidth: size,
        minHeight: size,
        minWidth: size,
        padding: '0 0',
        boxShadow: '2px rgba(255, 255, 255, .3)',
      },
      
    });
  const classes = useStyles();

  return (
    <Button
      onClick={(e)=>{props.onClick(e)}}
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        }}>
    </Button>
  );
}