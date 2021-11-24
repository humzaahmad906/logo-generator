import React, { Component } from 'react';
import axios from 'axios';
import CustomColorSwatch from '../helper/customcolorswatch';
import {connect} from 'react-redux';

function ColorGroup(props){
    React.useState()
    let groupClick = (e) => {
        e.currentTarget.style.border = "1px solid black";
    }
    return (<div className={'d-flex flex-wrap'} onClick={groupClick}>
        {   
            props.colorPalette.map(item=>{
                // return (<CustomColorSwatch color={item} size={"MEDIUM"}/>)
                return (<div style={{'background-color':item.color, height:'25px', width:'25px'}}></div>)
            })
        }
        </div>)
}

class ColorPanel extends Component {
    constructor(props) {
        super(props);
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
        console.log(obj)
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
                                    return (<div className={'m-1'}><ColorGroup colorPalette={item} size={"MEDIUM"}/></div>)
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