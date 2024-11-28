import express from "express";
import bodyParser from "body-parser";
import path from "path"
import { fileURLToPath } from "url";
const app= express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


app.use("/assets", express.static(path.join(__dirname, '/frontend/public/assets')));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/frontend/public/assets/pages/index.html"))
})





app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
console.log(__dirname);