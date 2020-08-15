import React, {Component} from 'react';
import NavBar from './appbar';
import SideBar from './sidebar';

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
                
            </React.Fragment>
        )
    }
}
export default MainView;