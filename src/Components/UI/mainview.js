import React, {Component} from 'react';
import NavBar from './appbar';
import SideBar from './sidebar';
import Canvas from '../Canvas/canvas';


class MainView extends Component{
    constructor(props){
        super(props);
        this.state = {drawerOpen: false};
        this.drawerWidth = 400;
    }
    openDrawer = () => {
        this.setState({drawerOpen:true});
    }
    closeDrawer = () => {
        this.setState({drawerOpen:false});
    }
    render(){
        const renderDiv = () =>{
            if(this.state.drawerOpen){
                return <div style={{"width":"400px","height":"400px"}}>
                </div>
            }else{return <div></div> }
        }
        
        return(
            <div>
                <NavBar drawerState={this.state.drawerOpen} openDrawer={this.openDrawer}/>
                <SideBar drawerState={this.state.drawerOpen} closeDrawer={this.closeDrawer}/>
                <div className={'d-flex text-align-center justify-content-center py-5'}>
                    {renderDiv()}
                    <Canvas/>
                </div>
                
            </div>
        )
    }
}
export default MainView;