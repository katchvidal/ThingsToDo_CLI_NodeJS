const { v4: uuidv4 } = require('uuid');



class Tarea{

    //  Definimos los Campos que Tiene una Tarea
    id = '';
    desc = '';
    Completado = null;

    //  Crear Constructor
    constructor( desc ){
        
        this.id = uuidv4();
        this.desc = desc;
        this.Completado = null;
    }

}


module.exports = Tarea;