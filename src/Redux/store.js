import {createStore, combineReducers} from 'redux';
import {CANVAS_ADDED, OBJECT_ACTIVE, SET_PANEL} from './actions';
const DEFAULT_STATE = {
    canvas: null,
    activeObject: null,
    activePanel: 0,
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
    console.log(action)
    if(action.type === SET_PANEL){
        return action.payload;
    }
    return state;
}

const reducer = combineReducers({
    canvas: canvasReducer,
    activeObject: activeObjectReducer,
    activePanel: panelReducer,
})
const store = createStore(reducer, DEFAULT_STATE);
export default store;