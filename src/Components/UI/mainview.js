import React, {Component} from 'react';
import NavBar from './appbar';
import SideBar from './sidebar';

class MainView extends Component{
    render(){
        return(
            <React.Fragment>
                <div><NavBar/></div>
                <div><SideBar/></div>
                
            </React.Fragment>
        )
    }
}
export default MainView;