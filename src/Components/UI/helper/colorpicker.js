import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import { SketchPicker } from 'react-color';
import ColorSwatch from './colorswatch';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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


  return (
    
      <Popover onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <Tabs value={tab} onChange={handleTabChange} aria-label="simple tabs example">
          <Tab label="COLOR_PICKER"/>
          <Tab label="COLOR_PALETTE"/>
        </Tabs>
        <div hidden={tab!==0}>
          <SketchPicker
                className="color-pick"
                color={colorNew}
                onChangeComplete={handleColorComplete}
                onChange={handleChange}
            />
        </div>
        <div hidden={tab!==1}>
          hey i'm a color palette
        </div>
      </Popover>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ColorPicker() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("black");

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  

  return (
    <React.Fragment>
      
      <ColorSwatch color={selectedValue} size={"MEDIUM"} setOpen={setOpen}/>
      <SimpleDialog open={open} setSelectedValue={setSelectedValue} onClose={handleClose} />
    </React.Fragment>
  );
}