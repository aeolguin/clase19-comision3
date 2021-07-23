//Importamos los modulos necesarios
const libros = require('../db/db.modelo')

//Exportamos los modulos que vamos a utilizar
module.exports.listaLibros = async function (){

    let resultado = await libros.find({}, (err, res)=>{
        return res
    })
    return resultado
}

module.exports.nuevoLibro = async function (libro){

    let modelo = {
        titulo: libro.titulo,
        descripcion: libro.descripcion,
        anioDePublicacion: libro.anioDePublicacion,
        autor: libro.autor,
        nuevo_activo : 0
    }

    let nuevoLibro = await new libros(modelo).save()
    return nuevoLibro
}

module.exports.eliminaLibro = async function (idLibro){
    
    let resultado = await libros.findByIdAndDelete({_id: idLibro})
    return ('Libro eliminado correctamente')
}

module.exports.modificaLibro = async function (data) {

    let resultado = await libros.findByIdAndUpdate(data.id , {$set:{autor: data.autor}})
    return resultado   
}