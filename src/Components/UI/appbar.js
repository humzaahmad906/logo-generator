import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
export default function NavBar(){
    return (
        <AppBar position="static" style={{background:"#3d4849"}}>
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                Logo Generator
            </Typography>
            </Toolbar>
        </AppBar>
    )
}