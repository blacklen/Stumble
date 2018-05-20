import bg0 from './data/images/0-min.jpg';
import bg1 from './data/images/1-min.jpg';
import bg2 from './data/images/2-min.jpg';
import bg3 from './data/images/3-min.jpg';
import bg4 from './data/images/4-min.jpg'; 
import bg5 from './data/images/5-min.jpg';
import bg6 from './data/images/6-min.jpg';
import bg7 from './data/images/7-min.jpg';
import bg8 from './data/images/8-min.jpg';
import bg9 from './data/images/9-min.jpg';
import bg10 from './data/images/10-min.jpg'; 
import bg11 from './data/images/11-min.jpg';
import bg12 from './data/images/12-min.jpg';
import bg13 from './data/images/13-min.jpg';
import bg14 from './data/images/14-min.jpg'; 
import bg15 from './data/images/15-min.jpg';
import bg16 from './data/images/16-min.jpg';
import bg17 from './data/images/17-min.jpg';
import bg18 from './data/images/18-min.jpg';
import bg19 from './data/images/19-min.jpg';
import bg20 from './data/images/20-min.jpg';
import bg21 from './data/images/21-min.jpg';
import bg22 from './data/images/22-min.jpg';
import bg23 from './data/images/23-min.jpg';
import bg24 from './data/images/24-min.jpg'; 
import bg25 from './data/images/25-min.jpg';
import bg26 from './data/images/26-min.jpeg';
import bg27 from './data/images/27-min.jpg';
import bg28 from './data/images/28-min.jpg';
import bg29 from './data/images/29-min.jpg';
import bg30 from './data/images/30-min.jpg';
import bg31 from './data/images/31-min.jpg';
import bg32 from './data/images/32-min.jpg';
import bg33 from './data/images/33-min.jpg';
import bg34 from './data/images/34-min.jpg'; 
import bg35 from './data/images/35-min.jpg';
import bg36 from './data/images/36-min.jpg';
import bg37 from './data/images/37-min.jpg';
import bg38 from './data/images/38-min.jpg';
import bg39 from './data/images/39-min.jpg';


let images = [bg0,bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,bg16,bg17,bg18,bg19];
let Random = (array) => {
    let a = Math.floor(Math.random() * array.length);
    return array[a];
}
function random(){
    return Random(images);
}

export {
    random
}
