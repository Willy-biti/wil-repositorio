require('dotenv/config')
const Sequelize = require("sequelize")


const sequelize = new Sequelize(process.env.BANCOPORTF, process.env.USERPORTF, process.env.SENHAPORTF, {
    host: process.env.HOSTPORTF,
    dialect: process.env.DIALECTPORTF
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}