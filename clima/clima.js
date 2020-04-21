const axios = require('axios');


const getClima = async(lat, lng) => {

    //Copiamos el url Get del postman
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=95536d1c92c1f8747a253a2373ac7888&units=metric`);

    //Devolvemos la temperatura que esta dentro de un objeto llamado main, se ve en la respuesta 
    //del postman todo el objeto se llama data
    return resp.data.main.temp;

}


module.exports = {
    getClima
};