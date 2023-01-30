const express = require('express')
const routes = express.Router()
const responsavelController = require('./controllers/responsavelController')
const app = express()
const path = require('path')


routes.get('/', (req, res) => res.redirect('/dev'))

routes.get('/dev', responsavelController.ler)

module.exports = routes;