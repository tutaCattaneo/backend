const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const userRouter = require ('./routes/user');
const app = express();

//middleware
app.use(express.json());


const port = process.env.PORT || 3000;

//middleware
app.use('/api', userRouter)


//routes 
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

 const uri = 'mongodb://localhost:27017/express-mongo';
 

//mongoose connection
mongoose.connect(process.env.MONGODB_URI
    || uri, { useNewUrlParser: true, useUnifiedTopology: true }
      ).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});



app.listen(port, () => {
    console.log('Example app listening on port 3000!');
    }
);
