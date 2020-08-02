var express = require('express');
var router = express.Router();
var noticiaController = require('../controllers/noticiaController');


/* Funciones */
router.get('/', noticiaController.traerUna);
router.post('/guardar', noticiaController.guardar);


module.exports = router;  