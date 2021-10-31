const express = require('express');
const app = express();

app.get('/api', (req, res) => {

    const apiKey = req.query.apiKey;

    res.send({data: 'good'});
    
});