const express = require('express');
const router = express.Router();
const sgMail = require('../config/sgMail');
const valid = require('../models/ctrl');
const formSchema = require('../models/validation');
const validation = require('../models/validation');
const msgForm = require('../models/msgForm');
// const cadForm = ('../models/cadForm.js')

router.get('/', function (req, res) {
    res.render('index', { title: 'Willy B. Biti' })
})

router.get('/sobre', function (req, res) {
    res.render('eu', { title: 'Sobre Willy' })
})

router.get('/repositorios', function (req, res) {
    res.render('repositorios', { title: 'GitHub' })
})

router.get('/tecnologia', function (req, res) {
    res.render('tecnologia', { title: 'Tecnologias' })
})

router.get('/certificados', function (req, res) {
    res.render('certificado', { title: 'Certificados' })
})

router.get('/redes', function (req, res) {
    res.render('redes', { title: 'Redes-Sociais' })
})

router.get('/contato', function (req, res) {
        res.render('contato', { title: 'Contato' })
})

router.post('/contato', async function (req, res) {

    // formSchema.validate();

    // msgForm.create({
    //     nome: req.body.nome,
    //     email: req.body.email,
    //     assunto: req.body.assunto,
    //     mensagem: req.body.mensagem
    // })

    const { to, subject, text, html } = req.body;

    let { nome, email, assunto, mensagem } = req.body;
    
    nome =req.sanitize(nome),
    email =req.sanitize(email),
    assunto =req.sanitize(assunto),
    mensagem =req.sanitize(mensagem)

    const msg = {
        from: process.env.FROM,
        to: process.env.TO,
        subject:process.env.SUBJECT,
        html:`
                <h2>Enviado por: ${nome}</h2>
                <h3>Gmail: ${email}</h3>
                <h3>Assunto: ${assunto}</h3>
                <h3>Mensagem: ${mensagem}</h3>
                `,
    };

    try {
        await sgMail.send(msg)
        console.log("Good")
    } catch (err) {
        console.log("fudeu")
        return res.status(err.code).send(err.message);
    }
    res.redirect('/contato')

})

module.exports = router; 