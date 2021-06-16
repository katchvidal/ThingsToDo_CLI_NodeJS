const Tarea = require('./tarea');
require('colors')



class Tareas{

    //  Almacena Todas las Tareas
    /**
     *  _listado:
     *      {  'uuid-123712-123123-2: { id:12, desc:asd,completadoeEN:92231 }  },
     */
    _listado = {};

    //  Convertir el objeto a un arreglo
    get listadoArray(){
        const listado = []

        //  Regresamos un arreglo de todas las llaves de la tarea /Id/Desc/Completado
        Object.keys(this._listado).forEach(key => {
            //  Imprimos Cada Llave o Elemento uno por uno
            //console.log(key)

            //  Todos los elementos del listado
            const tarea = this._listado[key]
            //  Los vas a meter a la lista en forma de Arreglo
            listado.push(   tarea   )
        })

        return listado;
    }

    //  Introduce Cada Accion a la lista de Tareas
    constructor(){
        this._listado = {};
    }

    //  Cargar Tarea de Database
    CargarTareaArray (tareas = []){

        //  Por Cada Tarea
        tareas.forEach(tarea =>{
            //   Busca Todas por su ID y muestrala
            this._listado[tarea.id] = tarea
        })
        
         
    }

    //  Crea La Tarea
    CreateTarea( desc = '' ){

        const tarea = new Tarea(desc)
        //  Genera ID a la Tarea como un conjunto para buscarla mas rapido
        this._listado[tarea.id] = tarea;
    }


    //  Listar Las Tareas Creadas y Mostrar si Estan Completadas
    listadoCompleto () {
        //  Salto de Linea
        console.log()

        //  Extrer todos los datos de cada Tarea e Indice
        this.listadoArray.forEach((tarea, i)  =>{
            //  Indice
            const idx = `${i + 1}`.green;

            //  Descripcion y Completado
            const { desc, Completado } = tarea;

            //  Esta Completado o no?
            const estado = (Completado)
                            ? 'Completada'.green
                            :  'No completada'.red;
            
            console.log(`${idx}.- ${desc} || ${estado}`);
        })

    }

    //  Listar Tareas Completadas

    ListarTareas (Completadas = true){
        console.log()

        this.listadoArray.forEach(  tarea =>    {

            let contador = 0;
            const {desc, Completado} = tarea;

            const estado = (Completado)
                            ? 'Completada'.green
                            :  'No completada'.red;
            
            //  Si existe
            if (Completadas){

                //  Si es True
                if (Completado){
                    contador +=1;
                    console.log(`${(contador + '.').green} ${desc} ${Completadas}`);
                }

            //  Caso Contrario
            }else{

                //  Si es False
                if (!Completado){
                    contador +=1;
                    console.log(`${(contador + '.').red} ${(desc).red} ${Completadas}`);
                }

            }
            
        })
    }

    BorrarTarea (   id = ' '   ){

        if(this._listado[id]){

            delete this._listado[id]
        }
    }


    ToggleCompletadas ( ids = [] ) {
        ids.forEach(id => {
            const tarea = this._listado[id]

            if (!tarea.Completado) {
                tarea.Completado = new Date().toISOString()
            }
        })

        this.listadoArray.forEach(tarea =>{
            if (!tarea.Completado){
                this._listado[tarea.id].Completado = null;
            }
        })
    }

}

module.exports = Tareas;
