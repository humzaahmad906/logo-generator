import React from 'react';


import ColorSwatch from './colorswatch'


export default function CustomColorSwatch(props) {
  const colorsPerBlock = props.colorsPerBlock
  const numberOfBlocks = props.numberOfBlocks
  const colorArray = props.colorArray
  const margins = {
    x: "5px",
    y: "2px"
  }
  let colorInRow = []
  // while(colorArray.length) {
  //   let colorBlock = []
  //   for(let i=0; i<numberOfBlocks; i++){
  //     let block = colorArray.splice(0, colorsPerBlock)
  //     colorBlock.push(block)
  //   }
  //   colorInRow.push(colorBlock);
  // }
  console.log(colorInRow)
  const colorBlocks = colorInRow.map(row => row.splice(colorsPerBlock))
  console.log("setColor", props.setColor)
  return <div className={"d-flex flex-wrap justify-content-center"} style={{'width':"200px"}}>
    {
      colorArray.map(color=><div onClick={(e)=>{props.setColor(e.currentTarget.style.backgroundColor)}} className={"m-1"} style={{'background-color':color, height:'25px', width:'25px'}}></div>)
    }
  </div>
  // return (
  //   <div>
  //     {
  //       colorInRow.map(
  //         colorRow => <div className={"d-flex"}>{
  //           colorRow.map(colorBlock => <FlexGroup margins={margins} groupColorArray={colorBlock}/>)
  //           }</div>
  //       )
  //     }
  //   </div>
  // );
}