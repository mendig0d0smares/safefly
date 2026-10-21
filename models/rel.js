const Cliente = require('./Cliente')
const Drone = require('./Drone')
const Agendamento = require('./Agendamento')

Cliente.hasMany(Drone,{
    foreignKey: 'idCliente',
    as: 'droneCliente',
    onDelete: 'CASCADE' })

Drone.belongsTo(Cliente,{
    foreignKey: 'idCliente',
    as:'clienteDrone',
    allowNull: false
})

Drone.hasMany(Agendamento, {
    foreignKey: 'idDrone',
    as: 'agendamentoDrone',
    onDelete: 'CASCADE'
})

Agendamento.belongsTo(Drone, {
    foreignKey: 'idDrone',
    as: 'droneAgendamento',
    allowNull: false
})

Cliente.hasMany(Agendamento, {
    foreignKey: 'idCliente',
    as: 'agendamentoCliente',
    onDelete: 'CASCADE'
})
Agendamento.belongsTo(Cliente, {
    foreignKey: 'idCliente',
    as: 'clienteAgendamento',
    allowNull: false
})

module.exports = {Cliente, Drone, Agendamento}