import React from 'react';


import ColorSwatch from './colorswatch'

function flexGroup(props){
  const groupColorArray = props.groupColorArray
  const margins = props.margins
  const styles = {
    marginLeft: margins.x/2, 
    marginRight: margins.x/2,
    marginTop: margins.y/2,
    marginBottom: margins.y/2
  }
  return (
  <span style={styles}>
    {groupColorArray.map(color => <ColorSwatch size={"MEDIUM"} color={"#"+color}/>)}
  </span>
  )
}

export default function CustomColorSwatch(props) {
  const colorsPerBlock = props.colorsPerBlock
  const numberOfBlocks = props.numberOfBlocks
  const colorArray = props.colorArray
  const margins = {
    x: "5px",
    y: "2px"
  }
  let colorInRow = []
  while(colorArray.length) {
    let colorBlock = []
    for(let i=0; i<numberOfBlocks; i++){
      let block = colorArray.splice(0, colorsPerBlock)
      colorBlock.push(block)
    }
    colorInRow.push(colorBlock);
  }
  console.log(colorInRow)
  const colorBlocks = colorInRow.map(row => row.splice(colorsPerBlock))
  
  return (
    <div>
      {
        colorBlocks.map(
          colorRow => <div className={"d-flex"}>{
            colorRow.map(colorBlock => <flexGroup margins={margins} groupColorArray={colorBlock}/>)
            }</div>
        )
      }
    </div>
  );
}