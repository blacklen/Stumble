import data from "./data/book.json"

let bookRandom = () => {
    let a = Math.floor(Math.random() * data.length);
    console.log(a);
    return data[a];
}

export{
    bookRandom
}