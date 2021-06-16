const inquirer = require('inquirer');
require('colors')


//  Menu Interactivo
const inquirerMenu = async() =>{

    const Question = [
        {
            type : 'list',  //  Define que tipo de Lista o seleccionador
            name : 'Option',
            message : '¿Que desea Hacer?',
            choices : [                 //  Valor y Nombre que imprime en Pantalla
                {   
                    value   :   '1',
                    name    :   `${'1'.green}. Crear una Tarea`,
                }, 
    
                {
                    value   :   '2',
                    name    :   `${'2'.green}. Listar Tareas`, 
                },
    
                {
                    value   :   '3',
                    name    :   `${'3'.green}. Listar Tareas Completadas`
                },
    
                {
                    value   :   '4',
                    name    :   `${'4'.green}. Listar Tareas Pendientes`
                },
    
                {   value   :   '5',
                    name    :   `${'5'.green}. Completar Tareas`
                },
    
                {   value   :   '6',
                    name    :   `${'6'.green}. Borrar Tareas`
                },
    
                {   value   :   '7',
                    name    :   `${'0'.green}. Salir\n`
                }
            ]
        },
    ];

    console.clear()
    console.log('=========================='.green)
    console.log('   Seleccione una opcion   '.green)
    console.log('=========================='.green)

    const {Option} = await inquirer.prompt(Question);
    return Option;

}

//  Esperar Hasta Seleccionar una Opcion del Menu Anterior
const Pause = async() =>{

    const Qpause = [
        {    
            type : 'input',
            name : 'Enter',
            message : `\nPresione ${'Enter'.green} para continuar`
        }
    ];

    console.log('\n')
    await inquirer.prompt(Qpause);
    
}



//  Usuario Genera La descripcion de la actividad 
const reed = async(message) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
    
}

const listadoborrar = async(    tareas = []     ) =>{

    const choices = tareas.map( (tarea, i) =>{
        const idx = `${i +1}.`.green
        return {
            value : tarea.id,
            name : `${idx} ${tarea.desc}`
        }   
    })

    choices.unshift({
        value : '0',
        name : '0. '.green + 'Cancelar'
    })

    const preguntas = [
        {
            type : 'list',
            name : 'id',
            message : 'Borrar',
            choices
        }
    ]
    const { id  } = await inquirer.prompt(preguntas);
    return id;
}


const confirmar = async(    message ) =>{
    const question = [
        {
            type : 'confirm',
            name : 'ok',
            message
        }
    ]
    const { ok  } = await inquirer.prompt(question);
    return ok;
}


const checklist = async(    tareas = []     ) =>{

    const choices = tareas.map( (tarea, i) =>{
        const idx = `${i +1}.`.green
        return {
            value : tarea.id,
            name : `${idx} ${tarea.desc}`,
            checklist : (tarea.Completado) ? true : false
        }   
    })


    const pregunta = [
        {
            type : 'checkbox',
            name : 'ids',
            message : 'seleccione',
            choices
        }
    ]

    const { ids  } = await inquirer.prompt(pregunta);
    return ids;
}


//  Exportar Logica de Inquirer
module.exports = {
    inquirerMenu,
    Pause,
    reed,
    listadoborrar,
    confirmar,
    checklist
}