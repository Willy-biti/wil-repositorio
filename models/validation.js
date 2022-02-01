// const { required } = require('@hapi/joi');
const joi = require('joi');

const formSchema = joi.object({
    nome: joi.string()
        .alphanum()
        .min(3)
        .required(),

    email: joi.string()
        .email()
        .min(3)
        .required(),

    assunto: joi.string()
        .alphanum()
        .required(),

    mensagem: joi.string()
        .alphanum()
        .min(3)
        .required(),
});

module.exports = formSchema;