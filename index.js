const express = require('express');
const app = express();

app.get('/api', (req, res) => {

    const apiKey = req.query.apiKey;

    res.send({data: 'good'});
    
});

app.listen(8080, () => console.log('alive on http://localhost:8080'));