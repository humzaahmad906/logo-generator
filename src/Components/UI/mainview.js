import React, {Component} from 'react';
import NavBar from './appbar';
import SideBar from './sidebar';
import Canvas from '../Canvas/canvas';

class MainView extends Component{
    constructor(props){
        super(props);
        this.state = {drawerOpen: false};
    }
    openDrawer = () => {
        this.setState({drawerOpen:true});
    }
    closeDrawer = () => {
        this.setState({drawerOpen:false});
    }
    render(){
        return(
            <React.Fragment>
                <NavBar drawerState={this.state.drawerOpen} openDrawer={this.openDrawer}/>
                <SideBar drawerState={this.state.drawerOpen} closeDrawer={this.closeDrawer}/>
                <div className={'d-flex align-items-center justify-content-between'}><Canvas/></div>
                
            </React.Fragment>
        )
    }
}
export default MainView;