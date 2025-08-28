import express from "express"
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import router from "./api/book/bookRoutes.js";
import cors from "cors"

dotenv.config();
const app = express()
app.use(cors());
const PORT = process.env.PORT 
app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello world nodejs") 
});

app.use("/book", router)

sequelize.sync()
.then(() => {
    app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
})
.catch((error) => {
    console.error('database connection failed', error.message)
})

