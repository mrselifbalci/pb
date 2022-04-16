const mongoose = require('mongoose');
require('dotenv').config();
module.exports = () => {
   mongoose.connect(process.env.DB_CONNECTION);
   mongoose.connection.on('open', () => {
       console.log('DB Connected');
   });
   mongoose.connection.on('error', () => {
       console.log('DB Connection failed');
   });
};
