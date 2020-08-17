import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from './Components/UI/mainview';
import {Provider} from 'react-redux';
import store from './Redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainView/>
      </Provider>
      
    );
  }
}

export default App;
