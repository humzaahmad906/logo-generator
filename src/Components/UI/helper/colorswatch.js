import React from 'react';

class ColorSwatch extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <div className={"my-auto"} style={{'height':'15px', 'width':'15px','background-color':this.props.color, 'display':'inline-block'}}></div>

        )
    }
}
export default ColorSwatch;