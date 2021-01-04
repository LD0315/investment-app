// console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://linlin:panacea315@cluster0.2dt1l.mongodb.net/investment-database?retryWrites=true&w=majority', {
    useUnifiedTopology: true
})
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('investment-database');
        const usersCollection = db.collection('userInput');

        app.use(bodyParser.urlencoded({ extended: true }));
        app.get('/submit', (req, res) => { });

        app.post('/submit', (req, res) => {
            usersCollection.insertOne(req.body)
                .then(result => {
                    console.log(result);
                })
                .catch(error => console.error(error));
            //console.log('Helloooooooooooooooooo!');
            //console.log(req.body);
        })
         
        app.listen(3000, function() {
            console.log('listening on 3000');
        });
    })
    .catch(console.error);



//app.get('/', (req, res) => {
    //res.send('Hello World');
    //res.sendFile(__dirname + '/index.html')
//});


