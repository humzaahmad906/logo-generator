import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ColorSwatch from './helper/colorswatch';

export default function NavBar(props){
    const drawerWidth = 400;
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
        }
    }));
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <AppBar 
         position="static"
         style={{background:"#3d4849"}}
         className = {clsx(classes.appBar, {
            [classes.appBarShift]: props.drawerState,
          })}>
            <Toolbar variant="dense">
            {!props.drawerState && (<IconButton
             edge="start"
             color="inherit"
             aria-label="menu"
             onClick={()=>{props.openDrawer()}}>
                <MenuIcon />
            </IconButton>)}
            <div className={'d-flex'}>
              <Typography className={"ml-3"} variant="h5" color="inherit">
                  Logo Generator
              </Typography>
              <div className={"ml-3"}></div>
              {/* <div variant="h6" className={"ml-3 my-auto"}>Color Swatch</div> */}
              <ColorSwatch color={"black"}/>
              <div className={"h5 ml-3  my-auto"}>Auto</div>
            </div>
            
            </Toolbar>
        </AppBar>
    )
}