import React from 'react';

class ColorSwatch extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <div className={"my-auto"} style={{'height':'18px', 'width':'18px','background-color':this.props.color}}></div>

        )
    }
}
export default ColorSwatch;