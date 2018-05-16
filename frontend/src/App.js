import React, { Component } from 'react';
import './App.css';
import { bgImage, random} from "./images";

class App extends Component {
  state = {
    imageUrl : bgImage,
    musicUrl : "http://data3.chiasenhac.com/downloads/1770/3/1769847-b984856c/128/Perfect%20-%20Ed%20Sheeran%20%5B128kbps_MP3%5D.mp3",
    book : ""
  }
  _onChange = ()=>{
    this.setState({imageUrl: random()})
  }
  render() {
    

    return (
      <div className="App">
        <div style={{backgroundImage: `url(${this.state.imageUrl})`}}  className="Background"></div>
          <div className="main">
            <div className = "title">
              <img className="logo" src="" />
              <button type="submit" onclick="_onChange">New</button>
              <audio controls autoPlay ><source src={this.state.musicUrl} type="audio/mpeg"/></audio>

            </div>
            <div style={{backgroundImage: `url(${this.state.imageUrl})`}} className="content">
    
            </div>
          </div>
      </div>
    );
  }
}

export default App;
