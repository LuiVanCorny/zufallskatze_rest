import {RestClient} from './restClient.js';

let button = document.getElementById('randomCat');
button.addEventListener("click", () => {
    setRandomCatImage();
})

async function setRandomCatImage(){
    const img = document.getElementById('catPicture');
    const restClient = new RestClient();

    const catUrl = await restClient.getRandomCatUrl();
    img.setAttribute('src', catUrl);
}