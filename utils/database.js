const Sequelize = require('sequelize');


const sequelize = new Sequelize('appointment_booking_app', 'root', 'Qwerty@2022', {
    dialect: 'mysql',
    host: 'localhost'
  });

module.exports=sequelize