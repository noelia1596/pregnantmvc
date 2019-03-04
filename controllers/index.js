const Usuario = require('../models/usuarios').clase;
const Antojo = require('../models/antojos');
const recogerUsuario = require('./usuarioController');
const Token = require('../auth/Token');



  exports.postModificarUsuario = (req, res, next) => {
    const usuarioId = req.body.usuario;
    const password = req.body.password;
    const Nombre = req.body.Nombre;
    const Apellidos = req.body.Apellidos;
    const FechaNacimientoMama = req.body.FechaNacimientoMama;
    const FechaEmbarazo = req.body.FechaEmbarazo;
    const NombrePadre = req.body.NombrePadre;
    const FechaNacimientoPadre = req.body.FechaNacimientoPadre;
    const ApellidosPadre = req.body.ApellidosPadre;
    console.log( password, Nombre, Apellidos,FechaNacimientoMama,FechaEmbarazo,NombrePadre,FechaNacimientoPadre,ApellidosPadre,usuarioId);
    Usuario
      .modificarUsuario( password, Nombre, Apellidos,FechaNacimientoMama,FechaEmbarazo,NombrePadre,FechaNacimientoPadre,ApellidosPadre,usuarioId)
      .then(() => {
        res.render('principal');
      })
      .catch(err => console.log(err));
  };

  exports.getModificarUsuario = (req, res, next) => {
    res.render('editarUsuario', {
      pageTitle: 'Editar Usuario',
    });
  };

  exports.postCrearUsuario = (req, res, next) => {
    const username = req.body.usuario;
    const password = req.body.password;
    const Nombre = req.body.Nombre;
    const Apellidos = req.body.Apellidos;
    const FechaNacimientoMama = req.body.FechaNacimientoMama;
    const FechaEmbarazo = req.body.FechaEmbarazo;
    const NombrePadre = req.body.NombrePadre;
    const FechaNacimientoPadre = req.body.FechaNacimientoPadre;
    const ApellidosPadre = req.body.ApellidosPadre;
    console.log(Usuario);
    const usuario = new Usuario(username, password, Nombre, Apellidos,FechaNacimientoMama,FechaEmbarazo,NombrePadre,FechaNacimientoPadre,ApellidosPadre);
    usuario
      .crearUsuario()
      .then(() => {
        res.render('principal');
      })
      .catch(err => console.log(err));
  };
  exports.postInsertarAntojo = (req, res, next) => {
    const nombreDelAntojo = req.body.NombreAntojo;
    const tipoDeAntojo = req.body.TipoDeAntojo;
    const fechaDelAntojo = req.body.FechaAntojo;
    const vecesDadasAntojo = req.body.VecesAntojo;
    const aQuienDio = req.body.antojos;
    const antojo = new Antojo(tipoDeAntojo, nombreDelAntojo, fechaDelAntojo, vecesDadasAntojo, aQuienDio);
    console.log(antojo);
    antojo
      .crearAntojo()
      .then(() => {
        res.render('principal',{
          token: Token.buildToken(userId)
        });
        
      })
      .catch(err => console.log(err));
  };


  exports.getInsertarAntojo = (req, res, next) => {
    userId = req.userId;//coge el usuario que se ha insertado
    res.render('insertarAntojo', {
      pageTitle: 'Insertar Antojo',
      token: Token.buildToken(userId) //al usuario le pasamos el token
    });
  };

  exports.verMedicamentos = (req, res, next) => {
    res.render('medicamentos', {
      pageTitle: 'Medicamentos',
    });
  };

  exports.comunicarEmbarazo = (req, res, next) => {
    res.render('comunicarEmbarazo', {
      pageTitle: 'Comunicar Embarazo',
    });
  };

  exports.verAlimentos = (req, res, next) => {
    res.render('alimentos', {
      pageTitle: 'Alimentos',
    });
  };


  exports.login = (req, res, next) => {
    res.render('login', {
      pageTitle: 'Crear Usuario',
    });
  };

  exports.postBorrarUsuario = (req, res, next) => {
    const usuId = req.params.usuario;
    Usuario.borrarUsuarioId(usuId)
    .then(() => {
        res.redirect('/',{
        token: Token.buildToken(userId)
        });
    })
    .catch(err => console.log(err));
  };

  
  exports.crearUsuario = (req, res, next) => {
    res.render('form', {
      pageTitle: 'Crear Usuario',
    });
  };
  


  exports.irPrincipal = (req, res, next) => {
    res.render('principal', {
      pageTitle: 'Pagina Principal',
      
//redencizamos para que se vaya
    });
  };

  /*
  exports.getModificarUsuario = (req, res, next) => {
    const usuarioId = req.params.id;
    Usuario.selectById(usuarioId)
      .then(([usuario]) => {
        res.render('edit', {
          usuario: usuario[0]
        });
      })
      .catch(err => console.log(err));
  };*/