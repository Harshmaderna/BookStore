import express from "express"
import sequelize from "./config/db.js";

const app = express()
const PORT = 3000;
app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello world")
});

sequelize.sync()
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})