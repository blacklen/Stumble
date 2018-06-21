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
    quote:"",
    idMusic: 0,
    animation: "",
    count: 0,

  }

  componentDidMount(){
    var d = new Date();
    var date = parseInt(d.getDate(),10) - 20;
    if(date < 0){
      if(d.getDate() >= 10) date = parseInt(d.getDate(),10) - 10;
      else date = d.getDate();
    }
    this.setState({idMusic: date});
    this.setState({imageUrl: random()});
    this.setState({musicUrl: musicRandom(date)});
    let bookData = bookRandom();
    this.setState({nameBook: bookData.name});
    this.setState({contentBook: bookData.content});
    this.setState({quote: bookData.quote});
    let check = this.state.check;
    for(let i=0;i<bookData.length;i++){
      check[i]=0;
    }
    this.setState({check});
    this.renderAudio();
    this.setState({animation: "fade-slide-down 2s .5s cubic-bezier(0, 0.5, 0, 1) forwards"})
  }
  

  _onChange = ()=>{
    this.setState({imageUrl: random()});
    this.setState({musicUrl: musicRandom(this.state.idMusic)});
    console.log(this.state.musicUrl);
    let bookData = bookRandom(this.state.check);
    this.setState({nameBook: bookData.name});
    this.setState({contentBook: bookData.content});
    this.setState({quote: bookData.quote});
    let count = this.state.count;
    if(count%2===1){
      this.setState({animation: "fade-slide-down 2s .5s cubic-bezier(0, 0.5, 0, 1) forwards"})
    }
    else{
      this.setState({animation: ""})
    }
    this.setState({count: count+1});
  }

  renderAudio() {
    return (
      <audio key={new Date().valueOf()} className="music" controls loop autoPlay >
        <source src={this.state.musicUrl} type="audio/mpeg"/>
      </audio>
    );
  }

  render() {
    return (
      <div className="App">
        <div style={{backgroundImage: `url(${this.state.imageUrl})`,animation: this.state.animation}}  className="Background"></div>
          <div className="main">
            <div className = "title">
              <div className="logo">Stumbling</div>
              <p className="nameBook"> {this.state.nameBook} </p>
              
              <button type="submit" className="change" onClick={this._onChange}>New</button>
              {this.renderAudio()}
            </div>
            <div style={{backgroundImage: `url(${this.state.imageUrl})`}} className="Background2"></div> 
            <div className="content">
              <p className="intro" dangerouslySetInnerHTML={{ __html: this.state.contentBook }}></p>
              <div className="footer">
                <h1 className="quote"> {this.state.quote} </h1>
                <h2 className="book"> -Trích {this.state.nameBook} - </h2>
                <iframe className="like" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fstumbling.herokuapp.com&width=450&layout=standard&action=like&size=small&show_faces=true&share=false&height=80&appId" width="450" height="80" style={{border: "none",overFlow: "hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
