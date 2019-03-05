const customerService = require('../services/usuario');


const findAll = (req, res) => {
  customerService.findAll()
    .then( result => { res.send(result) } )
    .catch( err => { res.send({"error": true, "detail":err }) });
}


module.exports = {
  findAll,
}