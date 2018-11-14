const axios = require('axios');


const getClima = async(latitud, longitud) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=d9f1fcb0e15870e0915ffd526e093671`)
        //let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d9f1fcb0e15870e0915ffd526e093671`)
        //console.log(resp.status)
    if (resp.status == 200) {

        let data = resp.data.main.temp;
        return {
            temp: data
        }
    } else {
        throw new Error(`Error al obtener clima con la latitud ${latitud} y longitud ${longitud}`, resp.message);

    }
};

module.exports = { getClima };