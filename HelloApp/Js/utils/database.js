const Sequelize = require('sequelize')
const DB_NAME = "dimadb"
const USER_NAME = "root"
const PASSWORD = "123456"

const sequelize = new Sequelize(DB_NAME,USER_NAME,PASSWORD,{
host: 'localhost',
dialect:'mysql'
})

module.exports = sequelize;