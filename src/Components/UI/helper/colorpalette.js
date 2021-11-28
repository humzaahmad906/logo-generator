import React from 'react'


import CustomColorSwatch from './customcolorswatch'

class ColorPalette extends React.Component{
    constructor(props){
        super(props)
        this.closestColors = this.generateClosestColors(props.closestColor)
        this.color = props.closestColor
        this.state = {colors: [this.generateClosestColors(props.closestColor)]}
    }
    hexToRgb = (hex) => {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {r: 0, g: 0, b: 0};
    }
    getRandomInt = () => {
        return Math.floor(Math.random() * 50);
    }
    clamp = num => Math.min(Math.max(num, 0), 255);

    componentToHex = (c) => {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    rgbToHex = (r, g, b) => {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    generateClosestColors = (color) => {
        const rgb = this.hexToRgb(color)
        let closeColors = []
        let closeColorsHex = []
        for(let i=0; i<2; i++){
            for(let j=0; j<16; j++){
                if(i===0){
                    closeColors.push({
                        r: this.clamp(rgb.r+this.getRandomInt()),
                        g: this.clamp(rgb.g+this.getRandomInt()),
                        b: this.clamp(rgb.b+this.getRandomInt())
                    })
                }else{
                    closeColors.push({
                        r: this.clamp(rgb.r-this.getRandomInt()),
                        g: this.clamp(rgb.g-this.getRandomInt()),
                        b: this.clamp(rgb.b-this.getRandomInt())
                    })
                }
            }
        }
        closeColors.forEach((rgb_color)=>{closeColorsHex.push(this.rgbToHex(rgb_color.r, rgb_color.g, rgb_color.b))})
        return closeColorsHex
    }
    componentDidUpdate() {
        this.closestColors = this.generateClosestColors(this.props.closestColor)
    }

    generateRandomColor = () => Math.floor(Math.random()*16777215).toString(16);
    randomColorGenerator = () => {
        return Array.from({length: 40}, () => 
            this.generateRandomColor()
        );
    }
    componentDidMount(){
        const colors = this.randomColorGenerator()
        console.log(colors)
        this.setState({colors: colors})
    }
    render(){
        console.log("this.props.setColor", this.props.setColor)
        console.log(this.closestColors[0])
        return (
            <CustomColorSwatch colorsPerBlock={4} numberOfBlocks={2} colorArray={this.closestColors} setColor={this.props.setColor}/>
        )
    }
}
export default ColorPalette;