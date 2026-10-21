const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Drone = db.define('drone',{
    codDrone:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modelo:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    numero:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    idCliente:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'codCliente'
        }
    },
    tipo:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false,
    tablenames: 'drones'
})

module.exports = Drone