var express = require('express')
var swig = require('swig')
var bodyParser = require('body-parser')
var _ = require('underscore')

var app = express()

// Configurar de swig!
app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
swig.setDefaults({cache:false})

// Static files
app.use('/assets', express.static(__dirname + '/public'))

// Body parser
app.use(bodyParser.json())

app.use(function(req, res, next){
	console.log('=>', req.method, req.path)

	next()
})

app.get('/', function (req, res) {
	res.render('hello-world')
})

app.get('/dispatcher', function (req, res) {
	res.render('dispatcher')
})

app.get('/dispatcher-with-tools', function (req, res) {
	res.render('dispatcher-with-tools')
})

app.get('/main', function (req, res) {
	res.render('main')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})