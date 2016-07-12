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

app.get('/timer', function (req, res) {
	res.render('timer')
})

app.get('/subreddit', function (req, res) {
	res.render('subreddit')
})

app.get('/events', function (req, res) {
	res.render('events')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})