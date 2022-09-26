const express = require ('express');
const app = express();
app.use(express.json())
require('dotenv').config({ path: './config/.env' })

const mongoose = require('mongoose');

mongoose.connect(
    process.env.Mongo_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
)
.then(res=> console.log('DataBase connected'))
.catch((err) => console.log(err) ) 



const userRoutes = require('./routes/userRoutes')
app.use('/api/v1/users', userRoutes)



const port = process.env.PORT ;
app.listen (port,(err)=> {
    err? console.log(err) : console.log('server is running on  port', port ) 
})

//app.listen(8080,(err)=> err ? console.log(err) : console.log('server is running on port 5000npm ')
//)
