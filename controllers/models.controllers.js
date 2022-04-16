const mongoose = require('mongoose');
const ModelModel = require('../models/Models.model');
exports.getAllModels = async (req, res) => {
    const { page = 1, limit=10 } = req.query;
   try {
       const response = await ModelModel.find()
       .limit(limit * 1)
	   .skip((page - 1) * limit)
       res.json(response);
   } catch (error) {
       res.status(500).json(error);
   }
 
};
