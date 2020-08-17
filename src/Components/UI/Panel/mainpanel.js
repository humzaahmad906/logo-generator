import React, {Component} from 'react';
import panel from '../../Data/paneldata';
import IconPanel from './iconpanel';
import ContainerPanel from './containerpanel';
import ColorPanel from './colorpanel';
import TextPanel from './textpanel';
import {connect} from 'react-redux';
import createPanel from './../../Data/paneldata'

class MainPanel extends Component{
    constructor(props){
        super(props);
        let panel = createPanel();
        console.log(createPanel)
        this.textPanel = this.props.activePanel===panel.textPanel && (
            <TextPanel/>
        );
        this.containerPanel = this.props.activePanel===panel.containerPannel && (
            <ContainerPanel/>
        );
        this.iconPanel = this.props.activePanel===panel.iconPanel && (
            <IconPanel/>
        );
        this.colorPanel = this.props.activePanel===panel.colorPanel && (
            <ColorPanel/>
        );
    }
    componentDidMount(){
       
    }
    render(){
        return(
            <div>
                {this.iconPanel}{this.textPanel}{this.containerPanel}{this.colorPanel}
            </div>
            
        )
        
    }
}
const mapStateToProps = (state) => ({
    activePanel: state.activePanel,
})

export default connect(mapStateToProps)(MainPanel);