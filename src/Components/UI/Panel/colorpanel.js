import React, { Component, useState } from 'react';
import axios from 'axios';
import CustomColorSwatch from '../helper/customcolorswatch';
import {connect} from 'react-redux';


function Palette(props){
    console.log("palette", props.colors)
    return (<React.Fragment>
        {props.colors.map(item=>{
            return <div style={{'background-color':item, height:'25px', width:'25px'}}></div>
        })}
    </React.Fragment>)
}


function ColorGroup(props){
    let groupClick = (e) => {
        if (e.currentTarget.style.outline==="black solid 1px"){
            e.currentTarget.style.outline = null
        }
        else {
            e.currentTarget.style.outline = "1px solid black";
        }
    }
    return (<div className={'d-flex flex-wrap'}>
        {   
            props.colorPalette.color.map((item, index)=>{
                if(props.highLight){

                }
                // return (<CustomColorSwatch color={item} size={"MEDIUM"}/>)
                return <div className={'d-flex flex-wrap m-1'} onClick={(e)=>{groupClick(e); props.highLight.payload =  index}}><Palette colors={item}/></div>
                // return (<div style={{'background-color':item.color, height:'25px', width:'25px'}}></div>)
            })
        }
        </div>)
}

class ColorPanel extends Component {
    constructor(props) {
        super(props);
        this.highlightedPalette = this.props.higlightedPalette
        this.keys = []
        this.state = {colors :{}};
        this.divList = null
    }
    componentDidMount() {

        // this.setState({colors:this.props.colorPalettes});
        let obj = {}
        this.props.colorPalettes.forEach((item)=>{
            if(!this.keys.includes(item.style.name)){
                this.keys.push(item.style.name);
                obj[item.style.name] = []
            }
            obj[item.style.name] = [...obj[item.style.name], item.palette]
        });
        console.log("object", obj)
        this.setState({colors:obj});
        

    }
    render() {

        return (
            <div className={''}>{this.keys.map((key) => {
                return(
                    <div>
                        <div>{key}</div>
                        <div className={"d-flex flex-wrap justify-content-between m-3"}>
                            {
                                this.state.colors[key].map((item)=>{
                                    let highlightedObject = {
                                        isHighlighted: false,
                                    }
                                    if(key in this.highlightedPalette){
                                        highlightedObject = {
                                            isHighlighted: true,
                                            payload: this.highlightedPalette[key]
                                        }
                                    }
                                    console.log("item of color group", item)
                                    return (<div className={'m-1'}><ColorGroup highLight={highlightedObject} colorPalette={item} size={"MEDIUM"}/></div>)
                                })
                            }
                        </div>
                    </div>

                )
            })}</div>
        )
    }
}
const mapStateToProps = (state) => ({
    colorPalettes:state.colorPalettes,
})
export default connect(mapStateToProps)(ColorPanel);