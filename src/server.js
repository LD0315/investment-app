// console.log('Node Test');
const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
});
    

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
            usersCollection.insertOne(req.body, (error, result) => {
                if (error) {
                    console.log(error)
                    res.status(400).json({ "error": error.message })
                    return;
                };

                res.json({
                    "message" : res.status(200), // success
                    "data":  res.send(result)   // return data object
                })
              })
            });
            
        
        // show user submittion 
        app.get('/', (req, res) => { 
            res.send('Hello World');

            db.collection('userInput').find().toArray()
                .then(results => {
                    console.log(results);
                })
                .catch(error => console.error(error));
        });
        
        
         
        app.listen(4000, function() {
            console.log('listening on 4000');
        });
    })
    .catch(console.error);






