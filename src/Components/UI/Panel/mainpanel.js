import React, {Component} from 'react';
import IconPanel from './iconpanel';
import ContainerPanel from './containerpanel';
import ColorPanel from './colorpanel';
import TextPanel from './textpanel';
import {connect} from 'react-redux';
import createPanel from './../../Data/paneldata'

class MainPanel extends Component{
    constructor(props){
        super(props);
        this.panel = createPanel();
        
    }
    componentDidMount(){
       
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
                    <ColorPanel/>
                )}
            </div>   
        )
    }
}
const mapStateToProps = (state) => ({
    activePanel: state.activePanel,
})

export default connect(mapStateToProps)(MainPanel);