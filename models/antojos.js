const db = require('../util/database');
const crypt = require('../util/crypt-util');
const usuarioController = require('../controllers/usuarioController');
const usuarioM = require('../models/usuarios');


module.exports = class Antojo{
    constructor(tipoDeAntojo, nombreDelAntojo, fechaDelAntojo, vecesDadasDelAntojo, aQuienLeDio){
        const usuariooo = usuarioM.instancia;
        console.log(usuariooo);
        this.usuario = usuariooo.username;
        this.tipoDeAntojo = tipoDeAntojo;
        this.nombreDelAntojo = nombreDelAntojo;
        this.fechaDelAntojo = fechaDelAntojo;
        this.vecesDadasDelAntojo = vecesDadasDelAntojo;
        this.aQuienLeDio = aQuienLeDio;
    }

    crearAntojo() {
        
        console.log(this.usuario,this.tipoDeAntojo, this.nombreDelAntojo, this.fechaDelAntojo, this.vecesDadasDelAntojo,this.aQuienLeDio);
        return db.execute(
            'INSERT INTO pregnant.antojos (usuario,tipoDeAntojo,nombreDelAntojo,fechaDelAntojo,vecesDadasDelAntojo,aQuienLeDio)VALUE(?, ?, ?, ?, ?,?)',
            [this.usuario,this.tipoDeAntojo, this.nombreDelAntojo, this.fechaDelAntojo,this.vecesDadasDelAntojo,this.aQuienLeDio]
        );
    }
/*
    crearAntojo() {
        
        console.log(this.usuario,this.tipoDeAntojo, this.nombreDelAntojo, this.fechaDelAntojo, this.vecesDadasDelAntojo,this.aQuienLeDio);
        return db.execute(
            'INSERT INTO pregnant.antojos (usuario,tipoDeAntojo,nombreDelAntojo,fechaDelAntojo,vecesDadasDelAntojo,aQuienLeDio)VALUE("un",?, ?, ?, ?, ?)',
            [this.usuario,this.tipoDeAntojo, this.nombreDelAntojo, this.fechaDelAntojo,this.vecesDadasDelAntojo,this.aQuienLeDio]
        );
    }
*/
    static ImprimirAntojo(id) {
        return db.execute('SELECT * FROM pregnant.antojos WHERE usuario = ?', [id]);
      }

    static BorrarAntojo(id){
        return db.execute('DELETE FROM pregnant.antojos WHERE usuario = ?', [id]);
    }

    
}