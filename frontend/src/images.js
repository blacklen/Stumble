import bgImage from "./2.jpg";
import bgImage2 from "./3.jpg";

const images = [bgImage,bgImage2];
let Random = (array) => {
    let a = Math.floor(Math.random() * array.length);
    console.log(a);
    return array[a];
}
function random(){
    return Random(images);
}

export {
    bgImage,
    random
}
