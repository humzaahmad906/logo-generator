import TextField from '@material-ui/core/TextField';
import React from 'react';
import { SketchPicker } from 'react-color'
import ColorSwatch from './colorswatch'

export default function CustomInput(props){
    const [colorNew, setColor] = React.useState(props.color)
    const handleColorComplete = (color) => {
        setColor(color);
        console.log(colorNew);
    }
    const handleChange = (color, e) => {
        setColor(color);
        console.log(colorNew);
    }
    return(
        <div>
            <form noValidate autoComplete="off">
                <TextField label="Text" variant="outlined" />
                
            </form>
            <ColorSwatch color={colorNew}/>
            <SketchPicker
                className="color-pick"
                color={colorNew.hex}
                onChangeComplete={handleColorComplete}
                onChange={handleChange}
            />
        </div>
    )
}