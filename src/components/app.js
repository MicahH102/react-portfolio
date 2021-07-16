import React, { Component } from 'react';
import moment from 'moment';
import TypeIt from "typeit-react";





import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Micah Hooper's Portfolio</h1>
        <PortfolioContainer />



        <div></div>
        
          <div className="App">
            <TypeIt option>{moment().format('MMMM Do YYYY, h:mm:ss a')}</TypeIt>
          </div>

      </div>
    );
  }
}
