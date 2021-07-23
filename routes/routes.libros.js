//requerimos los modulos necesarios
const librosServices = require('../services/services.libros')

//exportamos los modulos que vamos a utilizar
module.exports = async (app)=> {
    app.get('/libros', async (req,res)=> {
        try {
            let resultado = await librosServices.listaLibros()
            //console.log(resultado)
            res.json(resultado)
        }catch (error) {
            res.status(500).send('Algo raro paso')
        }
    })

    app.post('/libros', async (req,res)=>{
        let libro = req.body
        try {
            let resultado = await librosServices.nuevoLibro(libro)
            //console.log(resultado)
            res.json('se agrego correctamente el libro')
        }catch (error) {
            res.status(500).send('Algo raro paso')
        }
    
    });

    app.delete('/libros/:id', async (req,res)=> {
        let id = req.params.id
        try {
            let resultado = await librosServices.eliminaLibro(id)
            //console.log(resultado)
            res.json('se elimino correctamente el libro')
        }catch (error) {
            res.status(500).send('Algo raro paso')
        }
    });

    app.patch('/libros', async (req,res)=> {
        let data = req.body
        try {
            let resultado = await librosServices.modificaLibro(data)
            res.json(resultado)
        }catch (error) {
            console.log(error)
            res.status(500).send('Algo raro paso')
        }
    })
}
