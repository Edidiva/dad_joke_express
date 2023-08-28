const  express = require('express');
const axios = require('axios');
const jokeRoute = require('./backend/routes/dadJoke');
const path = require('path');
const cors = require('cors')

const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(cors());
app.use('/dad-jokes', jokeRoute);



const PORT = process.env.PORT || 3000;
  

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).json({message:"internal server error"})

}

)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

