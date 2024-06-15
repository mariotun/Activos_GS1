const express = require('express');
const router = express.Router();
const activosController = require('../Controlador/Activos_Controller');

router.post('/activos', activosController.addActivo);
router.get('/activos/:codigo', activosController.getActivoStatus);
router.get('/activos', activosController.getAllActivos);

module.exports = router;
