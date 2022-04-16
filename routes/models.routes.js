const express = require('express');
const router = express.Router();
 
const ModelsController = require('../controllers/models.controllers');
 
router.get('/models', ModelsController.getAllModels);
 
module.exports = router;