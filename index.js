
import express from "express";
import router from "./router.js";
import bodyParser from "body-parser";
import cors from 'cors';
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// use cors middleware
app.use(cors());
// //add your routes
// //enable pre-flight
app.use(router);
// start the Express server
app.listen(3001, () => {
    console.log("Server running on port 3001");
});