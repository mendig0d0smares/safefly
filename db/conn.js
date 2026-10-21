const { Sequelize } = require('sequelize')
const db = new Sequelize ('db_flysafe', 'root', 'senai',{
    host : 'localhost',
    dialect: 'mysql',
    port: 3306
})

db.authenticate()
.then(()=>{
    console.log('banco de dados conectado')
})
.catch((err)=>{
    console.error('erro de conexão com o banco de dados',err)
})

module.exports = db