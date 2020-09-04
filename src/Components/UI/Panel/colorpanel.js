import React, { Component } from 'react';
import axios from 'axios';
import CustomColorSwatch from '../helper/customcolorswatch';

function ColorGroup(props){
    React.useState()
    let groupClick = (e) => {
        e.currentTarget.style.border = "1px solid black";
    }
    return (<div onClick={groupClick}>
        {
            props.colorPalette.palette.map(item=>{
                return (<CustomColorSwatch color={item} size={"MEDIUM"}/>)
            })
        }
        </div>)
}

class ColorPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {colors :[]};
        this.divList = null
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:5000/panel/colorPanel`)
            .then(res => {
                const data = res.data;
                this.setState({colors :[...this.state.colors, ...data.colors]});
            })

    }
    render() {

        return (
            <div className={"d-flex flex-wrap justify-content-between m-3"}>{this.state.colors.map((item) => {
                return (<ColorGroup colorPalette={item} size={"MEDIUM"}/>)
            })}</div>
        )
    }
}
export default ColorPanel;