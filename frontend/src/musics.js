import data from "./data/musics.json";

let musicRandom = (idMusic) => {
    let a = Math.floor(Math.random() * data.length);
    let musicUrl = data[a].split("/");
    musicUrl[5] = idMusic;
    let fixed = musicUrl.toString();
    for (let i = 0; i < 8; i++) {
        fixed = fixed.replace(",", "/")
    }
    let fixedLink = fixed;
    return fixedLink;
}

export{
    musicRandom
}