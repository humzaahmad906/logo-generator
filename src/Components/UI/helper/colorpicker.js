import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import { SketchPicker } from 'react-color';
import ColorSwatch from './colorswatch';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    makeStyles,
    MuiThemeProvider,
    createMuiTheme
} from "@material-ui/core/styles";

import ColorPalette from './colorpalette';

function SimpleDialog(props) {
  const [tab, setTab] = React.useState(0)
  const { onClose, open } = props;
  const [colorNew, setColor] = React.useState(props.color)
  const handleColorComplete = (color) => {
      props.setSelectedValue(color.hex)
      setColor(color.hex);
  }
  const handleChange = (color, e) => {
      props.setSelectedValue(color.hex)
      setColor(color.hex);
  }
  const handleClose = () => {
    onClose(colorNew);
  };
  const handleTabChange = (event, newValue) => {
    console.log("tab value is", newValue)
    setTab(newValue);
  }
  console.log(props.position)
    const theme2 = createMuiTheme({
        overrides: {
            MuiPopover: {
                root: {
                    overflow: "scroll"
                },
                paper: {
                    left: `${props.position.left}px !important`,
                    top: `${props.position.top}px !important`,
                    overflowY: "auto"
                }
            }
        }
    });
  return (
      <MuiThemeProvider theme={theme2}>
      <Popover
          onClose={handleClose}
          aria-labelledby="simple-dialog-title"
          open={open}
          anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
          }}
          transformOrigin={{
              vertical: "top",
              horizontal: "center"
          }}

      >
        <Tabs value={tab} onChange={handleTabChange} aria-label="simple tabs example">
          <Tab label="Color Picker"/>
          <Tab label="Color Palette"/>
        </Tabs>
        <div className={"d-flex flex-wrap justify-content-center"}>
          <div hidden={tab!==0}>
            <SketchPicker
                  className="color-pick"
                  color={colorNew}
                  onChangeComplete={handleColorComplete}
                  onChange={handleChange}
              />
          </div>
          <div hidden={tab!==1}>
            <ColorPalette closestColor={colorNew} setColor={props.setSelectedValue}/>
          </div>
        </div>
      </Popover>
      </MuiThemeProvider>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ColorPicker() {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState({left: 0, top: 0})
  const [selectedValue, setSelectedValue] = React.useState("#000000");

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };


  return (
    <React.Fragment>

      <ColorSwatch color={selectedValue} size={"MEDIUM"} setOpen={setOpen} setPosition={setPosition}/>
      <SimpleDialog open={open} setSelectedValue={setSelectedValue} onClose={handleClose} position={position} color={selectedValue}/>
    </React.Fragment>
  );
}