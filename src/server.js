const express = require('express');
const app =express();
const morgan = require('morgan')
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./route');

//settings
app.set('port', process.env.PORT || 3000);
const dbOptions = {
  [
{"type":"header","version":"5.1.0","comment":"Export to JSON plugin for PHPMyAdmin"},
{"type":"database","name":"productodb"},
{"type":"table","name":"productos","database":"productodb","data":
[
{"id":"1","nombre":"Celular","descripcion":"Este es un oaoaoaooaoa","precio":"1500000","cantidad":"2"},
{"id":"2","nombre":"Tv","descripcion":"lo que sea xd","precio":"1500000","cantidad":"10"},
{"id":"4","nombre":"Tvkk","descripcion":"lo que sea xd","precio":"1500000","cantidad":"10"},
{"id":"5","nombre":"GEL","descripcion":"lo que sea xd","precio":"15000","cantidad":"6"}
]
}
]
};

//middlewares
app.use(morgan('combined'));
app.use(express.json());
app.use(myconn(mysql, dbOptions, 'single'));
//Routes-------------------
app.get('/', (req, res) =>{
    res.send('Bienvenido a mi API');
})
app.use('/api', routes);

//starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`)
});

