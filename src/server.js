const express = require('express');
const app =express();
const morgan = require('morgan')
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./route');

//settings
app.set('port', process.env.PORT || 3000);
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password:'',
    database:'productodb'
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

