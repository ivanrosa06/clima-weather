const lugar = require('./lugar/lugar')

const clima = require('./clima/clima')



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad del clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(18.480000, -69.910004)
//     .then(console.log);


const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coord.lat, coord.lng)

        return ` El clima de ${coord.direccion} es ${temp}`;

    } catch {

        console.log(`no se pudo determinar el clima de ${coord.direccion}`);
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)