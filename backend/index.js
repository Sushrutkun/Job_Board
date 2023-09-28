import express from 'express'
import dotenv from 'dotenv'
import router from './routes/appRoutes.js';
import errorHandler from './middleware/errorHandler.js'
import dbconnect from './config/dbConnections.js'
import cors from 'cors'
import { getlogindata, postsignup } from './controllers/signcontrollers.js';
import { addToWishlist, getWishlist } from './controllers/savedControllers.js';
import { addToApplied, deleteApplied, getApplied } from './controllers/appliedControllers.js';

dotenv.config();

dbconnect();
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
//cors
app.use(cors());

//api route
// app.use('/login',router);
app.post('/signin', getlogindata);
app.post('/signup', postsignup);

app.use('/api', router);

app.get('/saved',getWishlist);
app.post('/saved',addToWishlist);
// app.post('/saved/:id',addToWishlist);


app.post('/applied',addToApplied);
app.get('/applied',getApplied);
app.delete('/applied',deleteApplied);

app.use(errorHandler);

app.listen(port, () => {
    console.log("http://localhost:5000/");
    console.log(`Listening on PORT ${port}`);
});
