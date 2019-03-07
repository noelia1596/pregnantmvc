const path = require('path');

const express = require('express');

const router = express.Router();

const indexController = require('../controllers/index');

const usuarioController = require('../controllers/usuarioController');

const usuarioControl = require('../controllers/usuario');

const Token = require('../auth/Token');

// --- Añadimos controladores --- //
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/estadisticas',{ useNewUrlParser: true });

router.get('/',indexController.login);

router.post('/',usuarioController.doLogin);

router.get('/editarUsuario/:token/',Token.verifyParam,indexController.getModificarUsuario);

router.post('/editarUsuario/:token/',Token.verifyParam,indexController.postModificarUsuario);

router.get('/registrarse', indexController.crearUsuario);

router.post('/registrarse', indexController.postCrearUsuario);

router.get('/verMedicamentos/:token/',Token.verifyParam, indexController.verMedicamentos);

router.get('/comunicarEmbarazo/:token/',Token.verifyParam,indexController.comunicarEmbarazo);

router.get('/verAlimentos/:token/', indexController.verAlimentos);

router.get('/insertarAntojo/:token/',Token.verifyParam, indexController.getInsertarAntojo);

router.post('/insertarAntojo/:token/', Token.verifyParam, indexController.postInsertarAntojo);

router.get('/verAntojos/:token/',Token.verifyParam, indexController.getVerAntojos);

router.get('/irPrincipal', indexController.irPrincipal);

router.get('/verEstadisticas/:token/',Token.verifyParam, usuarioControl.findAll);

router.get('/borrarUsuario/:token/',Token.verifyParam, indexController.borrarUsuario);








module.exports = router;