const express = require("express");
const app = express();

app.get("/api/users", (req,res)=> {
    console.log("Hello, Ksusha");
});

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log("Listening");
});

