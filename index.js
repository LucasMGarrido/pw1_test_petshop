const db = require('./banco/mongoose.js')
const express = require('express');
const routes = require('./routes.js');
const app = express();
const Notas = require('./models/responsavel')
const metodo = require('method-override')
const parse = require('body-parser')

app.use(metodo('_method'))

app.use(parse.json());
app.use(parse.urlencoded({extended: false}));

//Conectar banco de dados
db()

//Chamando a rota
app.use(routes);


//Adicionando anotação ao banco de dados
app.use(express.urlencoded({extended: true}))

app.post('/dev', async(req, res) => {
    //const titulo = req.body.tituloadd
    //const anotacao = req.body
    //console.log(anotacao)

    const anotacao = new Notas(req.body)
    await anotacao.save()
    res.redirect('/')
})

app.set('view engine' , 'ejs')

//Listando a porta.
app.listen(3000, () => console.log('Server em funcionamento - http://localhost:3000'));