// ES6 Imports (latest imports and to use we add module in package.json 
import express from 'express';
import path from 'path';
// to resolve cors issue of backend eg. to run the different servers front and backend on localhost 
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
//components
// import Connection from './connection/db.js';
import Route from './routes/Route.js';
// import DefaultData from './default.js'

const port = process.env.PORT || 8000;
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', Route);

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('../Server/client/build/index.html'));
// });

// Heroku Deployment
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

app.listen(port,
    () => console.log(`Server is running successfully on PORT ${port}`));
// 
/**
 * Changed the name to frontend
 */
/**
 * "engines": {
    "node": "16.x"
  }, in package.json
 */