const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./routes/router');

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Ouvindo na porta ${process.env.PORT}`);
});