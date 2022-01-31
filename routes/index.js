const express = require('express');
const router = express.Router();
// const sgMail = require('../config/sgMail')
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

module.exports = router; 