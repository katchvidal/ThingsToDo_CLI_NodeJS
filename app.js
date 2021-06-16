require('colors')

const { GuardarDB,
        ReadDB

    } = require('./helpers/GuardarArchivo')

const { 
        inquirerMenu, 
        Pause,
        reed,
        listadoborrar,
        confirmar,
        checklist
    } = require('./helpers/inquirer')

const Tareas = require('./models/tareas')


console.clear()


const main = async()=>{


    //  Algunas Funcionalidades
    let opt = "";
    const tareas = new Tareas();
    const tareasDB = ReadDB();

    if(tareasDB){
        //  Aqui se van a Guardar todas las Tareas
        tareas.CargarTareaArray(tareasDB);
    }
 

    //  Hacer mientras que la condicion sea!
    do {

        //  Imprime el Menu
        opt = await inquirerMenu();
        
        //  Opciones del Menu
        switch (opt) {
            //  Crear Tareas
            case '1':
                //  Crear Opcion
                const desc = await reed('Descripcion:');
                console.log(desc);
                tareas.CreateTarea( desc );
                break;
            //  Listar Tareas
            case '2':

                tareas.listadoCompleto();
                break;
            //  Listar Tareas Completadas
            case '3':

                tareas.ListarTareas(true);
                break;
            //  Listar Tareas No Completadas
            case '4':

                tareas.ListarTareas(false);
                break;

            case '5':

                const ids = await checklist(tareas.listadoArray)
                tareas.ToggleCompletadas(ids)
                break;

            case '6':

                const id = await listadoborrar(tareas.listadoArray)
                if (id !== '0'){
                    const ok = await confirmar('Estas Seguro')
                
                    if (ok){
                        tareas.BorrarTarea(id)
                        console.log('Tarea Borrada Correctamente')
                    }
                }
  
                break;
        }

        //  Guardando Las Tareas
        GuardarDB(tareas.listadoArray)

        await Pause();

    }while(opt !== '0')
    
    
}

main();