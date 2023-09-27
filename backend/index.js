import express from 'express'
import dotenv from 'dotenv'
import router from './routes/appRoutes.js';
import errorHandler from './middleware/errorHandler.js'
import dbconnect from './config/dbConnections.js'
import cors from 'cors'

dotenv.config();

dbconnect();
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
//cors
app.use(cors());

//api route
// app.use('/login',router);
// app.use('/signup',router);
app.use('/api', router);
app.use(errorHandler);

app.listen(port, () => {
    console.log("http://localhost:5000/");
    console.log(`Listening on PORT ${port}`);
});
