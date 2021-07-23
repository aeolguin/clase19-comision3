//requerir los modulos
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const librosRoutes = require('./routes/routes.libros')

//middleware globales
app.use(express.json())

//Inicio de servidor
async function iniciarServidor () {
    mongoose.connect(process.env.DB_HOST + process.env.DB_DATABASE , 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        }
    ).then(r => {
        app.listen(process.env.PORT, ()=> {
            console.log('Servidor iniciado en el puerto 3000 y DB iniciada correctamente')
        })
    }).catch (error => {
        console.log(error)
        console.log('No se pudo conectar correctamente a la Base de Datos')
    })
}

iniciarServidor()


//Ocultamos nuestros endpoints
librosRoutes(app)