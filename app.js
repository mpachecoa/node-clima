const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad'
    }
}).argv;


const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async() => {
    try {
        let coord = await lugar.getLatLng(argv.direccion);
        //console.log(coord);
        let temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es ${temp.temp}`

    } catch (error) {
        return 'Error al obtener clima';
    }
}

getInfo()
    .then(retornar => console.log(retornar))
    .catch(e => console.log(e));