const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
var db;

MongoClient.connect('mongodb://localhost:27017/examen', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('examen')
    
    app.listen(process.env.PORT || 3000, () => {
        console.log('Listening on port 3000')
    })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/list')
})

app.get('/list',  (req, res)=> {
    var sort = { reden: 1 };
    db.collection('inhaal').find().sort(sort).toArray((err, result) => {
        if (err) return console.log(err)
        res.render('home.ejs', { inhaal: result })
    })
})
app.get('/add', (req, res) => {
    res.render('add.ejs', {})
})  
// zoeken of die examen al bestaat, zo niet wordt die toegevoegd
app.post('/add', (req, res) => {
    var query = { name: req.body.name, examen: req.body.examen, reden: req.body.reden };
    var addquery = { name: req.body.name, examen: req.body.examen, reden: req.body.reden, datum: new Date() };
    db.collection('inhaal').find(query).toArray(function (err, result) { 
        if (err) return console.log(err)
        if(result == ''){
            db.collection('inhaal').insertOne(addquery, (err, result) => {
                if (err) return console.log(err)
                res.redirect('/list')
                console.log(new Date());
            })
        }
        else {
            res.redirect('/list')
            console.log("gevonden, die bestaat al :D");
        }
    })
})

app.get('/search', (req, res) => {
    res.render('search.ejs', { product: '' })
})
app.post('/search', (req, res) => {
    var query = { name: req.body.name }
    db.collection('inhaal').find(query).toArray(function (err, result) {
        if (err) return console.log(err)
        res.render('search_result.ejs', { inhaal: result})
        //console.log(result);
    })
})

app.get('/update', (req, res) => {
    res.render('update.ejs', {product: ''})
})
app.post('/update', (req, res) => {
    var name = {name: req.body.name };
    var newquery = { examen: req.body.examen, reden: req.body.reden, datum: new Date() };
                                    //name = welke product wilt je aanpassen
                                    //$set: = nieuwe data die je wilt invoegen/die aangepast moet worden
    db.collection("inhaal").updateOne(name ,{$set: newquery}, function (err, result) {
        if (err) return console.log(err)
        res.redirect('/list')
            console.log("update :D");
        })
    }) 

app.post('/delete', (req, res) => {
    db.collection('inhaal').findOneAndDelete({ name: req.body.name }, (err, result) => {
        if (err) return res.send(500, err)
        res.redirect('/list')
    })
}) 
// You can use the req.params object to access all the parameters you pass in the url.
// app.get('/:id/:name',
// res.send('id: ' + req.params.id + ' and name: ' + req.params.name);