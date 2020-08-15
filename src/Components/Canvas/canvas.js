import {fabric} from 'fabric';
import React,{Component} from 'react';
class Canvas extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.canvas = new fabric.Canvas('canvas',{
            height: 500,
            width: 500,
            backgroundColor: "black",
            isDrawingMode: false,
            stateful:true
        });
        // this.canvas.set({height:600, width:600, background:'black'})
    }

    render(){
        return(
            <canvas id="canvas" width="300" height="300"></canvas>
        )
        
    }
}
export default Canvas;