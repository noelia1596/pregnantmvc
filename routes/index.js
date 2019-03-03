const path = require('path');

const express = require('express');

const router = express.Router();

const indexController = require('../controllers/index');

const usuarioController = require('../controllers/usuarioController');

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

router.get('/insertarAntojo', indexController.getInsertarAntojo);

router.post('/insertarAntojo', indexController.postInsertarAntojo);

router.get('/irPrincipal', indexController.irPrincipal);

router.post('/usuario/:id/borrar', indexController.postBorrarUsuario);








module.exports = router;