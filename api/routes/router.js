const express = require('express');
const router = express.Router();

const VagasController = require('../controllers/VagasController');

router.get('/', async (req, res) => {
    res.status(200).json({msg: 'Ok running'});
});

router.get('/vagas', async (req, res) => {
    let vagas = await VagasController.findAll();
    res.status(200).json({vagas: vagas});
});

router.post('/vagas', async (req, res) => {
    let result = await VagasController.cadastrar(req.body);
    res.status(201).json({vaga: result});
});

module.exports = router;