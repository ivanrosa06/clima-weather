const axios = require('axios');

const getLugarLatLng = async(dir) => {




    const encodeULr = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeULr}`,
        headers: { 'x-rapidapi-key': 'a6d042b714mshbb752d4aa699093p1ad7e6jsn817db5f53f95' }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}