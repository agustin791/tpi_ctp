var express = require('express');
var router = express.Router();

var llamadosRouter = require('./llamados/main');
var usuariosRouter = require('./usuarios/main');
var pacientesRouter = require('./pacientes/main');
var enfermerosRouter = require('./enfermeros/main');
var zonasRouter = require('./zonas/main');

//http://localhost:3104/api/llamados
router.use("/llamados",llamadosRouter)

//http://localhost:3104/api/usuarios
router.use("/usuarios",usuariosRouter)

//http://localhost:3104/api/pacientes
router.use("/pacientes",pacientesRouter)

//http://localhost:3104/api/enfermeros
router.use("/enfermeros",enfermerosRouter)

//http://localhost:3104/api/zonas
router.use("/zonas",zonasRouter)


module.exports = router;