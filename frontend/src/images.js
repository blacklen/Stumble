import bg0 from './data/images/0-min.jpg';
import bg2 from './data/images/2-min.jpg';
import bg3 from './data/images/3-min.jpg';
import bg5 from './data/images/5-min.jpg';
import bg6 from './data/images/6-min.jpg';
import bg7 from './data/images/7-min.jpg';
import bg9 from './data/images/9-min.jpg';
import bg10 from './data/images/10-min.jpg'; 
import bg13 from './data/images/13-min.jpg';
import bg14 from './data/images/14-min.jpg'; 
import bg16 from './data/images/16-min.jpg';
import bg18 from './data/images/18-min.jpg';
import bg19 from './data/images/19-min.jpg';
import bg20 from './data/images/20-min.jpg';
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
import bg33 from './data/images/33-min.jpg'; 
import bg35 from './data/images/35-min.jpg';
import bg36 from './data/images/36-min.jpg';
import bg40 from './data/images/40-min.jpg';
import bg42 from './data/images/42-min.jpg';
import bg43 from './data/images/43-min.jpg';
import bg44 from './data/images/44-min.jpg'; 
import bg46 from './data/images/46-min.jpg';
import bg47 from './data/images/47-min.jpg';
import bg48 from './data/images/48-min.jpg';
import bg49 from './data/images/49-min.jpg';
import bg50 from './data/images/50-min.jpg';
import bg51 from './data/images/51-min.jpg';
import bg52 from './data/images/52-min.jpg';
import bg54 from './data/images/54-min.jpg'; 
import bg55 from './data/images/55-min.jpg';
import bg56 from './data/images/56-min.jpg';
import bg57 from './data/images/57-min.jpg';
import bg58 from './data/images/58-min.jpg';
import bg59 from './data/images/59-min.jpg';
import bg61 from './data/images/61-min.jpg';
import bg63 from './data/images/63-min.jpg';
import bg67 from './data/images/67-min.jpg';
import bg68 from './data/images/68-min.jpg';
import bg69 from './data/images/69-min.jpg';
import bg70 from './data/images/70-min.jpg';
import bg71 from './data/images/71-min.jpg';
import bg72 from './data/images/72-min.jpg';
import bg73 from './data/images/73-min.jpg';
import bg74 from './data/images/74-min.jpg'; 
import bg75 from './data/images/75-min.jpg';
import bg76 from './data/images/76-min.jpg';
import bg77 from './data/images/77-min.jpg';
import bg78 from './data/images/78-min.jpg';
import bg79 from './data/images/79-min.jpg';
import bg82 from './data/images/82-min.jpg';
import bg83 from './data/images/83-min.jpg';
import bg84 from './data/images/84-min.jpg'; 
import bg85 from './data/images/85-min.jpg';
import bg86 from './data/images/86-min.jpg';
import bg87 from './data/images/87-min.jpg';
import bg88 from './data/images/88-min.jpg';
import bg89 from './data/images/89-min.jpg';
import bg97 from './data/images/97-min.jpg';
import bg99 from './data/images/99-min.jpg';
import bg100 from './data/images/100-min.jpg';


let images = [bg0,bg2,bg3,bg5,bg6,bg7,bg9,bg10,bg13,bg14,bg16,bg18,bg19,bg20,bg22,bg23,bg24,bg25,bg26,bg27,bg28,bg29,bg30,bg31,bg33,bg35,bg36,bg40,bg42,bg43,bg44,bg46,bg47,bg48,bg49,bg50,bg51,bg52,bg54,bg55,bg56,bg57,bg58,bg59,bg61,bg63,bg67,bg68,bg69,bg70,bg71,bg72,bg73,bg74,bg75,bg76,bg77,bg78,bg79,bg82,bg83,bg84,bg85,bg86,bg87,bg88,bg89,bg97,bg99,bg100];
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
