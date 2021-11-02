const express = require('express');
const cors = require('cors');


const app = express()

const {getHouses, deleteHouse, createHouse, updateHouse} = require("./controller.js");


app.use(express.json())
app.use(cors())

app.get("/api/house", getHouses);
app.get("/api/house/:id", deleteHouse);
app.post("/api/house", createHouse);
app.put("/api/house/:id", updateHouse)


app.listen(4040, () => {
    console.log("server is up on port 4040")
});