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

        app.post('/submit', (req, res) => {
            console.log(req.body);
            usersCollection.insertOne(req.body)
                .then(result => {
                    console.log(result);
                    res.redirect('/')
                    //console.log("!!!!!!!!!!!");
                    
                })
                .catch(error => console.error(error));
            //console.log('Helloooooooooooooooooo!');
            //console.log(req.body);
        })

        
        // show user submittion 
        app.get('/', (req, res) => { 
            res.send('Hello World');

            db.collection('userInput').find().toArray()
                .then(results => {
                    console.log(results);
                })
                .catch(error => console.error(error));
        });
        
        
         
        app.listen(3000, function() {
            console.log('listening on 3000');
        });
    })
    .catch(console.error);



//app.get('/', (req, res) => {
    //res.send('Hello World');
    //res.sendFile(__dirname + '/index.html')
//});


