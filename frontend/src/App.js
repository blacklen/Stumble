import React, { Component } from 'react';
import './App.css';
import { random} from "./images";
import {bookRandom} from "./books"; 
import {musicRandom} from "./musics";

class App extends Component {
  state = {
    imageUrl : "",
    musicUrl : "",
    nameBook : "",
    contentBook: "",
    quote:""
  }

  componentDidMount(){
    this.setState({imageUrl: random()});
    this.setState({musicUrl: musicRandom()});
    let bookData = bookRandom();
    console.log(bookData.quote);
    this.setState({nameBook: bookData.name});
    this.setState({contentBook: bookData.content});
    this.setState({quote: bookData.quote})
  }
  

  _onChange = ()=>{
    this.setState({imageUrl: random()});
    this.setState({musicUrl: musicRandom()});
    console.log(this.state.musicUrl);
    let bookData = bookRandom();
    console.log(bookData.quote);
    this.setState({nameBook: bookData.name});
    this.setState({contentBook: bookData.content});
    this.setState({quote: bookData.quote})
  }

  renderAudio() {
    return (
      <audio key={new Date().valueOf()} className="music" controls loop autoPlay >
        <source src={this.state.musicUrl} type="audio/mpeg"/>
      </audio>
    );
  }

  render() {
    console.log(this.state.musicUrl)
    return (
      <div className="App">
        <div style={{backgroundImage: `url(${this.state.imageUrl})`}}  className="Background"></div>
          <div className="main">
            <div className = "title">
              <div className="logo">Stumble</div>
              <i className="nameBook"> {this.state.nameBook} </i>
              {this.renderAudio()}
              <button type="submit" className="change" onClick={this._onChange}>New</button>
            </div>
            <div style={{backgroundImage: `url(${this.state.imageUrl})`}} className="content">
              <p className="intro" dangerouslySetInnerHTML={{ __html: this.state.contentBook }}></p>
              <div className="footer">
                <h1 className="quote"> {this.state.quote} </h1>
                <h2 className="book"> -Trích {this.state.nameBook} - </h2>
                <iframe className="like" src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Flocalhost%3A3000%2F&width=96&layout=button&action=like&size=small&show_faces=false&share=true&height=65&appId" width="96" height="65" style={{border:"none",overFlow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
