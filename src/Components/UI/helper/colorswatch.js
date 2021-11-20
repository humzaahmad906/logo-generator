import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function ColorSwatch(props) {
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
        background: props.color,
        borderRadius: 3,
        border: 0,
        color: 'white',
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
      onClick={()=>{props.setOpen(true)}}
      classes={{
        root: classes.root,
        }}>
    </Button>
  );
}