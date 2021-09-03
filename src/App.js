
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';


export default class App extends Component {
  render() {
    return (
      <>
        
        <Navbar handleCategory = {this.handleCategory}/>
            <News pageSize={5} country={"in"} category={"science"}/>
      </>
    )
  }
}
