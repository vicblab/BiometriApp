const express = require('express');
const servidor = express();
//TODO: usar lo mismo que en ionic para firebase
/*const cookieParser = require('cookie-parser')
servidor.use(cookieParser())*/
//const hash = require('./hash.js'); //RECIENTEMENTE MODIFICADO, COMENTAR? RECORDAR: var ahora=Date.now(); te da la hora epoch en ms
const bodyParser = require('body-parser')
servidor.use(bodyParser.urlencoded({ extended: false }))
servidor.use(bodyParser.json())
servidor.use(express.static('public'));
servidor.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next()
});

function peticionEsGetLogin(req) {

    // console.log (" peticionEsGetLogin() valorando: ", req.method, req.path, req.url)

    if (req.path != "/login") {

        return false
    }

    if (req.method != "GET") {
        return false
    }

    return true
} // ()
servidor.get('/test', function (peticion, respuesta) {

    respuesta.send(peticion.query.data.toString() + "+1");


})
