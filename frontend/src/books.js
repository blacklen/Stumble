import data from "./data/book.json"

let bookRandom = () => {
    let a = Math.floor(Math.random() * data.length);
    return data[a];
}

export{
    bookRandom
}