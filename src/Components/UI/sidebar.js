
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MainPanel from './Panel/mainpanel';
import NamePanel from './namepanel'

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },}))
export default function SideBar(props){
    const classes = useStyles();
    console.log(props.drawerState);
    return(
        <Drawer open={props.drawerState}
         style={{background:"#3d4849"}}
         className={classes.drawer}
         variant="persistent"
         anchor="left"
         classes={{
            paper: classes.drawerPaper,
          }}>
            <div>
                <IconButton onClick={()=>{props.closeDrawer()}}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <div className={"d-flex justify-content-between"}>
                <NamePanel/>
                <div>
                    <MainPanel/>
                </div>
            </div>
        </Drawer>
    )
}