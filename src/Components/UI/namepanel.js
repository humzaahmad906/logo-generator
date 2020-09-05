import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import createPanel from './../Data/paneldata';
import {setPanel} from './../../Redux/actions';
import {connect} from 'react-redux';

class NamePanel extends Component{
    constructor(props){
        super(props);
        this.panel = createPanel();
    }
    render(){
        return (
            <div className={"border rounded ml-3 mt-3"} style={{height:"230px"}}>
                <div className={"p-3"} style={{'cursor': 'pointer'}} onClick={()=>{this.props.setPanel(this.panel.textPanel)}}>
                    <TextFieldsIcon fontSize={"medium"} color="disabled"/>
                </div>
                <Divider/>
                <div className={"p-3"} style={{'cursor': 'pointer'}} onClick={()=>{this.props.setPanel(this.panel.colorPanel)}}>
                    <ColorLensIcon fontSize={"medium"} color="disabled"/>
                </div>
                <Divider/>
                <div className={"p-3"} style={{'cursor': 'pointer'}} onClick={()=>{this.props.setPanel(this.panel.iconPanel)}}>
                    <InsertEmoticonIcon fontSize={"medium"} color="disabled"/>
                </div>
                <Divider/>
                <div className={"p-3"} style={{'cursor': 'pointer'}} onClick={()=>{this.props.setPanel(this.panel.containerPanel)}}>
                    <CheckBoxOutlineBlankIcon fontSize={"medium"} color={"disabled"}/>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = {setPanel}
export default connect(null, mapDispatchToProps)(NamePanel);