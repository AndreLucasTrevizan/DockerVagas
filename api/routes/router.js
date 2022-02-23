const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({msg: 'Ok running'});
});

router.get('/vagas', async (req, res) => {
    
});

router.post('/vagas', async (req, res) => {
    
});

module.exports = router;