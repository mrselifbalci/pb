const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ModelSchema = new Schema(
   {
     
   },
   { timestamps: true },
);
module.exports = mongoose.model('model', ModelSchema);