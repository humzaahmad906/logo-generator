import React, {Component} from 'react';
import IconPanel from './iconpanel';
import ContainerPanel from './containerpanel';
import ColorPanel from './colorpanel';
import TextPanel from './textpanel';
import {connect} from 'react-redux';
import createPanel from './../../Data/paneldata'
import axios from 'axios';
import {savePalettes} from '../../../Redux/actions';


import {COLOR_PALETTE_LINK} from "../../../configs"

class MainPanel extends Component{
    constructor(props){
        super(props);
        this.panel = createPanel();
        this.highlightedPalette = {};
        
    }
    componentDidMount(){
       axios.get(COLOR_PALETTE_LINK)
       .then((res)=>{
           this.props.savePalettes(res.data);
       })
       .catch((err)=>{
           console.log(err);
       })
    }
    render(){
        return(
            <div style={{'width':'300px'}} className={"border rounded mr-3 mt-3"}>
                {this.props.activePanel===this.panel.textPanel && (
                    <TextPanel/>
                )}{
                this.props.activePanel===this.panel.containerPanel && (
                    <ContainerPanel/>
                )}{
                this.props.activePanel===this.panel.iconPanel && (
                    <IconPanel/>
                )}{
                this.props.activePanel===this.panel.colorPanel && (
                    <ColorPanel higlightedPalette={this.highlightedPalette}/>
                )}
            </div>   
        )
    }
}
const mapDispatchToProps = {savePalettes}
const mapStateToProps = (state) => ({
    activePanel:state.activePanel,
});
export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);