const express = require("express");
const app = express();
const port = 5000;
const mongodb = require("./db")
mongodb();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
})
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello World");
})
app.use("/api", require("./routes/User"));
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})