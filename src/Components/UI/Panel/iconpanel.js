import React,{ Component } from "react";
import {Collapse} from "@material-ui/core";


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
                <div onClick={this.handleChange}>
                    show div
                </div>
                <Collapse in={this.state.expanded}>
                    <div>
                        div is here present
                    </div>
                </Collapse>
            </React.Fragment>
            
        )           
    }
}
export default IconPanel;