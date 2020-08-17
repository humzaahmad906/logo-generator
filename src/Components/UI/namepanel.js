import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

class NamePanel extends Component{
    render(){
        return (
            <div className={"border rounded ml-3 mt-3"}>
                <div className={"p-3"} style={{'cursor': 'pointer'}}>
                    <TextFieldsIcon fontSize={"medium"} color="disabled"/>
                </div>
                <Divider/>
                <div className={"p-3"} style={{'cursor': 'pointer'}}>
                    <ColorLensIcon fontSize={"medium"} color="disabled"/>
                </div>
                <Divider/>
                <div className={"p-3"} style={{'cursor': 'pointer'}}>
                    <InsertEmoticonIcon fontSize={"medium"} color="disabled"/>
                </div>
                <Divider/>
                <div className={"p-3"} style={{'cursor': 'pointer'}}>
                    <CheckBoxOutlineBlankIcon fontSize={"medium"} color={"disabled"}/>
                </div>
            </div>
        )
    }
}
export default NamePanel;