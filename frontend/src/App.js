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
              <button type="submit" className="change" onclick="_onChange">New</button>
              <audio controls loop autoPlay ><source src={this.state.musicUrl} type="audio/mpeg"/></audio>

            </div>
            <div style={{backgroundImage: `url(${this.state.imageUrl})`}} className="content">
              <p className="intro">Kể về cuộc đời của cô bé Aya Kitou. Aya Kitou chỉ sống trên cõi đời vỏn vẹn hơn 20 năm do bản thân mắc phải căn bệnh hiểm nghèo quái ác mang tên “Thoái hóa tiểu não”. Căn bệnh đã khiến tương lai của cô là một con đường hẹp và ngày càng trở nên hẹp hơn. Thậm chí, việc tự mình bước đi, tự tay làm một điều gì đó cũng trở nên quá xa vời đối với cô gái nhỏ. Căn bệnh ngày càng phát triển khiến cô mất đi khả năng kiểm soát cơ thể mình, mới đầu chỉ là khó khăn trong việc đi lại, dần dần Aya phải ngồi xe lăn, không thể cầm đũa hay không phát âm theo ý muốn được nữa. Cuối cùng, cô bé phải nằm liệt giường.Việc viết nhật ký mới đầu chỉ là phương pháp điều trị để Aya có thể phần nào điều khiển cơ thể mình và cũng để bác sĩ theo dõi tốc độ phát triển bệnh. Nhưng dần dần cuốn nhật ký lại trở thành một phần không thể thiếu trong cuộc sống của cô. Trong suốt 6 năm kiên trì viết nhật ký, cô kể về những cảm nhận và suy tư của bản thân trong suốt thời gian chứng kiến cơ thể mình từng bước từng bước gánh lấy một số phận đau đớn.Đọc Một lít nước mắt, ta thấy hình ảnh một cô bé tật nguyền về cơ thể nhưng lại có sự mạnh mẽ phi thường. Không phải cô cố gắng thể hiện mình như một anh hùng mà nghị lực của Aya chỉ đơn giản là sự cố gắng nhỏ bé nhằm chống chọi lại căn bệnh quái ác đang ngày ngày tàn phá cơ thể mình. Sự yêu đời, nâng niu cuộc sống trong Aya được thể hiện qua những sở thích bình dị nhất như ngắm nhìn bầu trời xanh, đọc sách hay ước mơ nhỏ nhoi được về nhà thăm gia đình.,…Dù cơ thể tật nguyền nhưng Aya chưa bao giờ từ bỏ con đường tìm kiếm giá trị bản thân.</p>
              <div className="footer">
                <h1 className="quote"> "Miễn là tôi còn sống, tôi không thể dừng thời gian lại được" </h1>
                <h2 className="book"> - Trích Một Lít Nước Mắt - Kito Aya - </h2>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
