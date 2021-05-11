const express = require("express");
const mongoose = require("mongoose");
const MONGO_PORT = parseInt(process.env.MONGO_DB_PORT) || 27017;
const MONGO_USER = process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const MONGO_HOST = 'mongo';
const mongoDBUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/?authSource=admin`;
mongoose.connect(mongoDBUrl)
.then(()=> console.log("Successfully connected to mongo DB"))
.catch(()=> console.error("Error while connecting"));
const app = express();
app.get("/",(_,res)=>{
    res.send("I am alive & kicking");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Listening on Port http://localhost:${port}`);
}); 
 