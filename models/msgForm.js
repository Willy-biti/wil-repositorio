const db = require('./db')

const msgForm = db.sequelize.define('formPortf', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    assunto: {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.TEXT
    }
})

// Criar a tabela
// msgForm.sync({ force: true })

module.exports = msgForm