import React, { Component } from 'react';
import axios from 'axios';
import CustomColorSwatch from '../helper/customcolorswatch';

function ColorGroup(props){
    let groupClick = (e) => {
        e.currentTarget.style.border = "1px solid black";
    }
    return (<div onClick={groupClick}>
        {
            props.palette.map(item=>{
                return (<CustomColorSwatch color={item.color} size={"MEDIUM"}/>)
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
        // console.log(fetch("http://127.0.0.1:5000/panel/colorPanel",{
        //     method: 'GET',
        //     mode:'no-cors',
        //     dataType: 'json'
        //     })
        //     .then((res)=>res.json())
        //     .then((obj)=>{
        //         return {colors:[...this.state.colors,...obj.colors]};
        //     })
        //     .catch((error)=>{
        //         return error;
        //     }))
        axios.get(`http://127.0.0.1:5000/panel/colorPanel`)
            .then(res => {
                const data = res.data;
                this.setState({colors :[...this.state.colors, ...data.colors]});
            })

    }
    render() {
        console.log(this.colors);
        return (
            <div className={"d-flex flex-wrap justify-content-between m-3"}>{this.state.colors.map((item) => {
                return (<ColorGroup palette={item} size={"MEDIUM"}/>)
            })}</div>
        )
    }
}
export default ColorPanel;