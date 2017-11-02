var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createPool({
		host: "localhost",
		user: "root",
		password: "root",
		database: "baobei"
	})
	/* GET users listing. */
router.post('/insert', function(req, res, next) {
	var h = req.body.a;
	var m = req.body.b;
	var x = req.body.b;
	var z = req.body.b;
	res.header('Access-Control-Allow-Origin', "*")
	con.query(`INSERT INTO item (title,detail) VALUES ('${h}','${m}','{x}','{z}')`, function(err, rows, fields) {
		res.send(rows)
	})
});
router.get('/detail', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*")
	con.query(`SELECT * FROM item`, function(err, rows, fields) {
		res.send(rows)
	})
});

module.exports = router;