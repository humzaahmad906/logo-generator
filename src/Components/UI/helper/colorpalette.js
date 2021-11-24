import React from 'react'


import CustomColorSwatch from './customcolorswatch'

class ColorPalette extends React.Component{
    constructor(){
        super()
        this.state = {colors: []}
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
        return (
            <CustomColorSwatch colorsPerBlock={4} numberOfBlocks={2} colorArray={this.state.colors}/>
        )
    }
}
export default ColorPalette;