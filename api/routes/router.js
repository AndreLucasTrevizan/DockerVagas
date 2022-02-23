const express = require('express');
const router = express.Router();

const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: '154263789',
    database: 'vagas'
});

con.connect((err) => {
    if(err) {
        console.error(err);
        return;
    }

    console.log('Connection done!');
});

router.get('/', async (req, res) => {
    res.status(200).json({msg: 'Ok running'});
});

router.get('/vagas', async (req, res) => {
    con.query('SELECT * FROM vagas ORDER BY id DESC', (err, data) => {
        if(err) {
            res.status(404).json({msg: `Error: ${err}`});
            return;
        }

        res.status(200).json({vagas: data});
    });
});

router.post('/vagas', async (req, res) => {
    con.query('INSERT INTO vagas SET ?', req.body, (err, data) => {
        if(err){
            res.status(404).json({msg: `Error: ${err}`});
            return;
        }

        res.status(201).json({data});
    });
});

module.exports = router;