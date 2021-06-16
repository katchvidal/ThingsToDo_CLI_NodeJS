const { rejects } = require('assert');
const { resolve } = require('path');

require('colors')

const ShowMenu = () => {

    return new Promise(resolve =>{

        console.clear()
        console.log('========================='.green)
        console.log('   Seleccione una opcion   '.green)
        console.log('=========================='.green)
    
        console.log(`${'1'.green}. Crear una Tarea`)
        console.log(`${'2'.green}. Listar Tareas`)
        console.log(`${'3'.green}. Listar Tareas Completadas`)
        console.log(`${'4'.green}. Listar Tareas Pendientes`)
        console.log(`${'5'.green}. Completar Tareas`)
        console.log(`${'6'.green}. Borrar Tareas`)
        console.log(`${'0'.green}. Salir\n`)
    
        //  Recibir Datos del usuario
        const readline = require('readline').createInterface({
            input : process.stdin,
            output : process.stdout
        })
    
        readline.question('Seleccione una opcion: ', (opt) =>{
            readline.close();
            resolve(opt);
        })
    });

}


const Pause = ()=>{
    return new Promise(resolve =>{

        const readline = require('readline').createInterface({
            input : process.stdin,
            output : process.stdout
        })
    
        readline.question(`\nPresione ${'Enter'.green} para continuar`, () =>{
            readline.close();
            resolve();
        })
    })

}





module.exports = {
    ShowMenu,
    Pause    
}