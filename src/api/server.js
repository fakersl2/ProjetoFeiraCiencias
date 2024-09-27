const express = require ('express');
const routes = require('../api/routes/index.js')

const app = express()
const port = 5000;

app.use(express.json())
routes(app);

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
})
