import React, { Component } from 'react';
import './App.css';
import { bgImage, random} from "./images";
import {bookRandom} from "./books"; 

class App extends Component {
  state = {
    imageUrl : bgImage,
    musicUrl : "http://data.chiasenhac.com/downloads/1770/3/1769847-b984856c/128/Perfect%20-%20Ed%20Sheeran%20%5B128kbps_MP3%5D.mp3",
    nameBook : "",
    contentBook: "",
    quote:""
  }
  _onChange = ()=>{
    this.setState({imageUrl: random()});
    let bookData = bookRandom();
    console.log(bookData.quote);
    this.setState({nameBook: bookData.name});
    this.setState({contentBook: bookData.content});
    this.setState({quote: bookData.quote})
  }

  render() {
    return (
      <div className="App">
        <div style={{backgroundImage: `url(${this.state.imageUrl})`}}  className="Background"></div>
          <div className="main">
            <div className = "title">
              <img className="logo" src="" />
              <i className="nameBook"> {this.state.nameBook} </i>
              <button type="submit" className="change" onClick={this._onChange}>New</button>
              <audio controls loop autoPlay ><source src={this.state.musicUrl} type="audio/mpeg"/></audio>

            </div>
            <div style={{backgroundImage: `url(${this.state.imageUrl})`}} className="content">
              <p className="intro">{this.state.contentBook}</p>
              <div className="footer">
                <h1 className="quote"> {this.state.quote} </h1>
                <h2 className="book"> -Trích {this.state.nameBook} - </h2>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
