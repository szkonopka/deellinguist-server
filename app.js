const express = require('express')
const bodyParser = require('body-parser')

const chatlog = require('./routes/chatlog.route');
const message = require('./routes/message.route');
const user = require('./routes/user.route');
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://thesis:thesiskonopka1@ds127094.mlab.com:27094/linguistic_chatbot_db'

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = 2137;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/chatlogs', chatlog);
app.use('/messages', message);
app.use('/users', user);


app.listen(port, () => {
    console.log('Server is up on port: ' + port);
})


