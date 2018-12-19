const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch")

const app = express()

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000

var https = require('https');
 



app.get('/', (req, res) => {
    res.status(200).json({status: 'ok'})
});

app.get('/bimbumbam/',(req,res) => {
	var risp = Math.ceil(Math.random()*5);
	res.status(200).send({result: risp});
});


var server = app.listen(PORT, () => console.log('Example app listening on port '+ PORT))

app.get('/play/', async(req,res) => {
	var player1 = parseInt(req.query.player1); 
	if(player1 < 1 || player1 > 5)
	{
		res.status(400).json({"code":400,"message":"il numero deve essere compreso fra 1 e 5"});
	}
	else
	{
		var response = await fetch('http://localhost:3000/bimbumbam').then(res => res.json());
		
		var player2 = response.result;
		var somma = player1 + player2;
		var pari = somma % 2;
		res.status(200).json({
				"result":pari,
				"player2":player2
			});
	}
});

