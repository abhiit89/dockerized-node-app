const express = require("express");
const app = express();
app.get("/",(_,res)=>{
    res.send("I am alive and kicking");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Listening on Port http://localhost:${port}`);
}); 
