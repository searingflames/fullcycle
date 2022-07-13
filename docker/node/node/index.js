const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'abc987',
    database:'nodedb'
};
const mysql = require('mysql')
const connection1 = mysql.createConnection(config)

const sqlinsert = `INSERT INTO people(name) values('Pedro')`
connection1.query(sqlinsert)
connection1.end()

app.get('/', (req,res) => {
    const connection2 = mysql.createConnection(config)
    connection2.query(`SELECT name FROM people ORDER BY id DESC LIMIT 1`, (err, rows) => {
    connection2.end()
    res.send('<h1>Full Cycle</h1><br/>' + 'Last user: ' + rows[0].name)
    })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
