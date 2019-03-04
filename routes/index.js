const path = require('path');

const express = require('express');

const router = express.Router();

const indexController = require('../controllers/index');

const usuarioController = require('../controllers/usuarioController');

const Token = require('../auth/Token');

// --- Añadimos controladores --- //

router.get('/',indexController.login);

router.post('/',usuarioController.doLogin);

router.get('/editarUsuario',indexController.getModificarUsuario);

router.post('/editarUsuario',indexController.postModificarUsuario);

router.get('/registrarse', indexController.crearUsuario);

router.post('/registrarse', indexController.postCrearUsuario);

router.get('/verMedicamentos', indexController.verMedicamentos);

router.get('/comunicarEmbarazo', indexController.comunicarEmbarazo);

router.get('/verAlimentos', indexController.verAlimentos);

router.get('/insertarAntojo/:token/',Token.verifyParam, indexController.getInsertarAntojo);

router.post('/insertarAntojo/:token/', Token.verifyParam, indexController.postInsertarAntojo);

router.get('/irPrincipal', indexController.irPrincipal);

router.post('/borrarUsuario/:token/', Token.verifyParam, indexController.postBorrarUsuario);








module.exports = router;