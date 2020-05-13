export class RestClient{

    async getRandomCatUrl(){
        const response = await fetch('http://aws.random.cat/meow');
        const json = await response.json();
        const fileUrl = json.file;

        return fileUrl;
    }
}