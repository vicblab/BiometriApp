const express = require('express');
const servidor = express();
const bodyParser = require('body-parser')
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
//import firebaseConfig from "./credentials";
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCJAyIMdSSkp6RrsbDQVvoyk3CQ1gonhqk",
    authDomain: "proyectoteam1.firebaseapp.com",
    databaseURL: "https://proyectoteam1.firebaseio.com",
    projectId: "proyectoteam1",
    storageBucket: "proyectoteam1.appspot.com",
    messagingSenderId: "1003318421997",
    appId: "1:1003318421997:web:214323c7529495cafd5fe4"
};

servidor.use(bodyParser.urlencoded({ extended: false }))
servidor.use(bodyParser.json())
servidor.use(express.static('public'));


servidor.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next()

})
var fB;
var db;
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


servidor.use(() => {
    fB = firebase.initializeApp(firebaseConfig);
    db = fB.storage();
   

});

function devolverTodoLoDeFirebase() {
    var lista = [];
    db.collection('data').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                lista.push(doc.toString());
            });
            return lista;
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    
}

servidor.get('/', (peticion, respuesta) => respuesta.send('Hola mundo'));

servidor.get('/data', devolverTodoLoDeFirebase());
servidor.listen(3000,

    () => { console.log("yass"); }//firebase.initializeApp(firebaseConfig

    );