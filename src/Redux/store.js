import {createStore, combineReducers} from 'redux';
import {CANVAS_ADDED, OBJECT_ACTIVE, SET_PANEL, COLOR_PANEL_PALETTES} from './actions';
const DEFAULT_STATE = {
    canvas: null,
    activeObject: null,
    activePanel: 0,
    colorPalettes: [],
}
const canvasReducer = (state = null, action) =>{
    if(action.type === CANVAS_ADDED){
        return action.payload;
    }
    return state;
}
const activeObjectReducer = (state = null, action) => {
    if(action.type === OBJECT_ACTIVE){
        return action.payload;
    }
    return state;
}
const panelReducer = (state = null, action) => {
    if(action.type === SET_PANEL){
        console.log("active panel:", state)
        return action.payload;
    }
    return state;
}
const colorPaletteReducer = (state =[], action) => {
    if(action.type === COLOR_PANEL_PALETTES){
        return [...state, ...action.payload];
    }
    return state
}

const reducer = combineReducers({
    canvas: canvasReducer,
    activeObject: activeObjectReducer,
    activePanel: panelReducer,
    colorPalettes: colorPaletteReducer,
})
const store = createStore(reducer, DEFAULT_STATE);
export default store;