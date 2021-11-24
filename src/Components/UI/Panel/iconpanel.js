import React,{ Component } from "react";
import {Collapse} from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class IconPanel extends Component{
    constructor(props){
        super(props);
        this.state = {expanded:false};
    }
    handleChange = () => {
        this.setState({expanded:!this.state.expanded});
    }
    render(){
        return (
            <React.Fragment>
                <div className={'d-flex flexwrap justify-content-between border rounded m-3'} style={{cursor:"pointer"}} onClick={this.handleChange}>
                    <div className={'m-3'}>
                        Icon Shapes
                    </div>
                    <div className={'m-3'}>
                        {
                            this.state.expanded && (
                                <ExpandLessIcon/>
                            )
                        }
                        {
                            !this.state.expanded && (
                                <ExpandMoreIcon/>
                            )
                        }
                    </div>
                    
                </div>
                <Collapse in={this.state.expanded}>
                    <div className={'d-flex flexwrap justify-content-center border rounded m-3 p-3'} onClick={this.handleChange}>
                        <div className={'m-auto'}>
                            <ExpandLessIcon fontSize={"large"}/>
                            <ExpandMoreIcon  fontSize={"large"}/>
                            <ExpandLessIcon fontSize={"large"}/>
                            <ExpandMoreIcon  fontSize={"large"}/>
                            <ExpandLessIcon fontSize={"large"}/>
                            <ExpandMoreIcon  fontSize={"large"}/>
                            <ExpandLessIcon fontSize={"large"}/>
                            <ExpandMoreIcon  fontSize={"large"}/>
                            <ExpandLessIcon fontSize={"large"}/>
                            <ExpandMoreIcon  fontSize={"large"}/>
                            <ExpandLessIcon fontSize={"large"}/>
                            <ExpandMoreIcon  fontSize={"large"}/>
                            <ExpandLessIcon fontSize={"large"}/>
                            <ExpandMoreIcon  fontSize={"large"}/>
                            <ExpandLessIcon fontSize={"large"}/>
                            <ExpandMoreIcon  fontSize={"large"}/>
                        </div>
                    </div>
                </Collapse>
            </React.Fragment>
            
        )           
    }
}
export default IconPanel;