const responsavelDados = require('../models/responsavel');


class responsavelController {
    async ler (req, res){
        const items = await responsavelDados.find()

        res.render('../view/responsavel.ejs', {items : items})
    }
}