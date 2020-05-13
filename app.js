import {RestClient} from './restClient.js';

async function setRandomCatImage(){
    const img = document.getElementById('catPicture');
    const restClient = new RestClient();

    const catUrl = await restClient.getRandomCatUrl();
    img.setAttribute('src', catUrl);
}

setInterval(()=> {
    setRandomCatImage();
}, 2000);