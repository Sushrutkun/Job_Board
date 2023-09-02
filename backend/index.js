import express from 'express'
import dotenv from 'dotenv'
import router from './routes/appRoutes.js';
import errorHandler from './middleware/errorHandler.js'
import dbconnect from './config/dbConnections.js'

dotenv.config();

dbconnect();
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use('/api',router);
app.use(errorHandler);

app.listen(port , ()=>{
    console.log("http://localhost:5000/");
    console.log(`Listening on PORT ${port}`);
});
