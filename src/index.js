const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const multer = require('multer')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())


mongoose.connect("mongodb+srv://Ankitsrivastav412:G1fTVr3JcQfPfLGB@myfunctionup.f4mg0.mongodb.net/group04Database?authSource=admin&replicaSet=atlas-rbbsrv-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true", {
    useNewUrlParser: true
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {

    console.log('Express app running on port' + (process.env.PORT || 3000))

});