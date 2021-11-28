import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import './App.css';


import MainView from './Components/UI/mainview';
import store from './Redux/store'
import RecommenderUI from './Components/UI/recommendations/recommenderdesign'
import RecommendationForm from './Components/UI/recommendation_form/recommendationform'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainView/>}>
            </Route>
            <Route path="recommender" element={<RecommenderUI />}>
            </Route>
            <Route path="recommendation_form" element={<RecommendationForm />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
