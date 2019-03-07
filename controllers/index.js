const Usuario = require('../models/usuarios').clase;
const Instancia = require('../models/usuarios').instancia;
const Antojo = require('../models/antojos');
const recogerUsuario = require('./usuarioController');
const Token = require('../auth/Token');



  exports.postModificarUsuario = (req, res, next) => {
    userId = req.userId;
    console.log(userId);
    const usuarioId = userId;
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
        res.render('principal',{
          token: Token.buildToken(userId)
        });
        
      })
      .catch(err => console.log(err));
  };

  exports.getModificarUsuario = (req, res, next) => {
    userId = req.userId;
    res.render('editarUsuario', {
      token: Token.buildToken(userId),
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
    Instancia = usuario;
    usuario
      .crearUsuario()
      .then(() => {
        res.render('principal',{
          token: Token.buildToken(username)
        });
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

  exports.getVerAntojos = (req, res, next) => {
    userId = req.userId;//coge el usuario que se ha insertado
    Antojo.ImprimirAntojo(userId)
    .then((rows) => {
      let antojos = rows[0];
      console.log("rowsssssssssss",antojos);
      res.render('VerAntojos', {
        pageTitle: 'Insertar Antojo',
        token: Token.buildToken(userId), //al usuario le pasamos el token
        antojos:antojos
      })
      
    })
    .catch(err => console.log(err));
    
  };

  exports.verMedicamentos = (req, res, next) => {
    userId = req.userId;
    res.render('medicamentos', {
      pageTitle: 'Medicamentos',
      token: Token.buildToken(userId)
    });
  };

  exports.comunicarEmbarazo = (req, res, next) => {
    userId = req.userId;
    res.render('comunicarEmbarazo', {
      pageTitle: 'Comunicar Embarazo',
      token: Token.buildToken(userId)
    });
  };

  exports.verAlimentos = (req, res, next) => {
    userId = req.userId;
    res.render('alimentos', {
      pageTitle: 'Alimentos',
      token: Token.buildToken(userId)
    });
  };


  exports.login = (req, res, next) => {
    res.render('login', {
      pageTitle: 'Crear Usuario',
    });
  };


  
  exports.borrarUsuario = (req, res, next) => {
    userId = req.userId;
    console.log("borrar usuario",req);
    Usuario.borrarUsuarioId(userId)
    .then(() => {
        res.redirect('/');
    })
    .catch(err => console.log(err));
  };

  
  exports.crearUsuario = (req, res, next) => {
    res.render('form', {
      pageTitle: 'Crear Usuario',
    });
  };
  


  exports.irPrincipal = (req, res, next) => {
    userId = req.userId;
    console.log("reqaaaaaaaaaaaaaaaaaa",req);
    res.render('principal', {
      pageTitle: 'Pagina Principal',
      token: Token.buildToken(userId),
     // name : 'Noelia'
    });
  };
  
  
  exports.findAllB = (req, res, next) => {
    userId = req.userId;
    res.render('estadisticas', {
      pageTitle: 'Pagina De Estadisticas',
      token: Token.buildToken(userId)
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