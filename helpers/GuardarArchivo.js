const fs = require('fs')
const archivo = './database/data.json'

//  Crear Base de Datos en Formato JSON
const GuardarDB = (database) =>{

    //  Los datos recibidos para guardar en archivo primero los convertimos en Strings
    fs.writeFileSync(   archivo, JSON.stringify(database)    )
}



//  Leer la Base de Datos
const ReadDB = () =>{

    //  Si no Existe Retorna Vacio
    if (!fs.existsSync(archivo)){
        return null;
    }

    //  Pero si Existe Codificala en UTF-8
    const info = fs.readFileSync(archivo, {encoding : 'utf-8'});
    //  Conviertela en un JSON DE NUEVO
    const data = JSON.parse(info);
    console.log(data);
    return data;
}

module.exports = {
    GuardarDB,
    ReadDB
}