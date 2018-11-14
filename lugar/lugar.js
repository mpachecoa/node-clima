const axios = require('axios');


const getLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyALFgqAK6oO-c2PaexUzTONjZoaoIkM_pI`)

    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error(`Error en la dirección ${direccion}`);
    } else {
        let data = resp.data.results[0];
        return {
            direccion: data.formatted_address,
            lat: data.geometry.location.lat,
            lng: data.geometry.location.lng
        }
    }
};

module.exports = { getLatLng };