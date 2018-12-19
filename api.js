const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch")

const app = express()

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000

var https = require('https');
 

app.get('/play', (req, res) => {
    res.json({status: 'ok'})
})


app.get('/', (req, res) => {
    res.json({status: 'ok'})
});

app.get('/bimbumbam/',(req,res) => {
	var risp = Math.ceil(Math.random()*5);
	res.send({result: risp});
});


var server = app.listen(PORT, () => console.log('Example app listening on port '+ PORT))

app.get('/play/', async(req,res) => {
	var player1 = parseInt(req.query.player1); 
	var response = await fetch('http://localhost:3000/bimbumbam').then(res => res.json());
	
	var player2 = response.result;
	var somma = player1 + player2;
	var pari = somma % 2;
	res.status(201).json({
			"result":pari,
			"player2":player2
		});
});

