const usuarioModel = require('../models/estadisticas').model;

const findAll = () => {
  return new Promise( (resolve, reject) => {
      const callback = (err, result) => {
      if (err) reject(err);
      resolve(result);
    };
    usuarioModel.find({enabled: true}).exec(callback);
  });
}

const create = usuario => { //aqui ponerle el then y el cath
  return new Promise( (resolve, reject) => {
      /*
      usuario
      .then(() => {
      })
      */
    const newUsuario = new usuarioModel(usuario);
    newUsuario.save( err => {
      if (err) reject(err);
      resolve(newUsuario);
    });
  });
}


module.exports = {
  findAll,
  create,
}