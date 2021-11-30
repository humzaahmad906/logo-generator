import React from 'react';
import axios from 'axios';
import {fabric} from "fabric";
import {FormControl, InputLabel, Input, Button, Typography} from '@material-ui/core';
import FontFaceObserver from "fontfaceobserver"


class RecommendationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            companyName: "",
            data: [],
            recommendedColors: []
        }

    }
    changeSelectedCategory = (e) => {
        let category = [...this.state.data]
        category[parseInt(e.currentTarget.id)].selected = !category[parseInt(e.currentTarget.id)].selected
        if(category[parseInt(e.currentTarget.id)].selected){
            category = category.map((item, index)=>{
                if(index!==parseInt(e.currentTarget.id)){
                    item.selected=false;
                }
                return item
            })
        }
        this.setState({data: category})

    }
    getRandomElement = (array) => (
        array[Math.floor(Math.random() * array.length)]
    )
    loadFont = (font) => {
        let myfont = new FontFaceObserver(font)
        myfont.load()
            .then(() => {
                // when font is loaded, use it.
                this.canvas.getActiveObject().set("fontFamily", font);
                this.canvas.renderAll();
            }).catch((e) => {
            console.log(e)
            alert('font loading failed ' + font);
        });
    }
    componentDidMount(){
        this.canvas = new fabric.Canvas("c");
        axios.get('http://127.0.0.1:5000/get_categories')
        .then( (response) => {
            const categories = response["data"]
            let data = categories.map((category) => ({category: category, selected: false}))
            this.setState({data: data});
        })
        .catch((error) => {
            console.log(error);
        });
        axios.get('http://127.0.0.1:5000/recommended_colors')
            .then( (response) => {
                let colors = response["data"].map((color) => ({color: color, selected: false}))
                this.setState({recommendedColors: colors});
            })
            .catch((error) => {
                console.log(error);
            });
    }

//     var canvas = new fabric.Canvas('c');
// // Define an array with all fonts
//     var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];
//
//     var textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
//         left: 50,
//         top: 50,
//         width: 150,
//         fontSize: 20
//     });
//     canvas.add(textbox).setActiveObject(textbox);
//     fonts.unshift('Times New Roman');
// // Populate the fontFamily select
//     var select = document.getElementById("font-family");
//     fonts.forEach(function(font) {
//         var option = document.createElement('option');
//         option.innerHTML = font;
//         option.value = font;
//         select.appendChild(option);
//     });
//
// // Apply selected font on change
//     document.getElementById('font-family').onchange = function() {
//         if (this.value !== 'Times New Roman') {
//             loadAndUse(this.value);
//         } else {
//             canvas.getActiveObject().set("fontFamily", this.value);
//             canvas.requestRenderAll();
//         }
//     };
//
//     function loadAndUse(font) {
//         var myfont = new FontFaceObserver(font)
//         myfont.load()
//             .then(function() {
//                 // when font is loaded, use it.
//                 canvas.getActiveObject().set("fontFamily", font);
//                 canvas.requestRenderAll();
//             }).catch(function(e) {
//             console.log(e)
//             alert('font loading failed ' + font);
//         });
//     }

    onSubmit = (item) => {

        axios.post("http://127.0.0.1:5000/get_svg", {category: item.category}).then((response)=>{
            let svg_img = new String(response.data)
            console.log(svg_img)
            this.canvas.backgroundColor = 'rgb(150,150,150)';
            let path = fabric.loadSVGFromString(svg_img, (objects, options)=>{
                let obj = fabric.util.groupSVGElements(objects, options);

                this.canvas.add(obj);
                this.canvas.renderAll();
                const object = this.canvas.getObjects()[this.canvas.getObjects().length-1]
                this.canvas.setActiveObject(object)
                const activeObject = this.canvas.getActiveObject()

                const boundingRect = activeObject.getBoundingRect()
                let scale = 1
                if(boundingRect.width>boundingRect.height){
                    scale = 100/activeObject.width;
                }else{
                    scale = 100/activeObject.height;
                }
                console.log(scale*activeObject.height, scale*activeObject.width)
                activeObject.scale(scale)
                activeObject.set({originX: 'center',
                                originY: 'center'})
                activeObject.set({left: this.canvas.getWidth()/2, top: this.canvas.getHeight()/2})
                activeObject.setCoords()
                const fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];
                const margin = 2
                let text = new fabric.Textbox(this.state.companyName, {
                    fontSize: 16,
                    textAlign: 'center',
                    originX: "center",
                    originY: "center",
                    left: this.canvas.getWidth()/2,
                    top: this.canvas.getHeight()/2-scale*activeObject.height-margin,
                });
                this.canvas.add(text)
                let text_object = this.canvas.getObjects()[this.canvas.getObjects().length-1]
                this.canvas.setActiveObject(text_object)
                let fontType = this.getRandomElement(fonts)
                this.loadFont(fontType)
                this.canvas.renderAll()
                this.setState({data: []})
            })
        })
    }

    render(){
        return (
            <div className={"d-flex flex-wrap justify-content-between"}>
                <canvas id="c" width={"1000px"} height={"1000px"}></canvas>
                <FormControl>
                    <Typography>Company Name</Typography>
                    <Input id="my-input"
                    value={this.state.companyName} 
                    margin="normal"
                    onChange={(e)=>{this.setState({companyName: e.target.value})}}/>

                    <Typography>Company Type</Typography>
                    <ul>{this.state.data.map((item, i) => <Button
                        color="primary" size="small" variant={item.selected ? "contained": "outlined" }
                        id={i}
                        onClick={(e)=>{this.changeSelectedCategory(e)}}>{item.category}</Button>)}
                    </ul>

                    <Typography>Recommended Colors</Typography>
                    <div className={"d-flex flex-wrap justify-content-center"} style={{'width':"300px"}}>
                        {
                            this.state.recommendedColors.map((color, id)=><div
                                onClick={()=>{
                                    let recommendedColors = [...this.state.recommendedColors]
                                    recommendedColors[id].selected=true
                                    this.setState({recommendedColors: recommendedColors})
                                }}
                                className={"m-1"} style={{'background-color':color.color, height:'25px', width:'25px'}}></div>)
                        }
                    </div>
                    <Button
                    type="submit"
                    fullWidth={false}
                    variant="outlined"
                    color="primary"
                    onClick={() => this.onSubmit(this.state.data.filter(item=>item.selected)[0])}
                    >
                        Submit
                    </Button>
                </FormControl>
                <div className={"d-flex flex-wrap align-self-start"} style={{'width':"300px"}}>
                    <Typography>Selected Colors</Typography>
                    {
                        this.state.recommendedColors.map((color, id)=> {
                            if(color.selected){
                                return <div
                                    className={"m-1"}
                                    style={{'background-color': color.color, height: '25px', width: '25px'}}>

                                </div>
                            }
                            return <React.Fragment></React.Fragment>
                        })
                    }
                </div>
            </div>
            )
    }
}

export default RecommendationForm;