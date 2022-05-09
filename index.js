const express = require('express')
const cors = require('cors');
const path = require("path");
const app = express()
const env = require("dotenv");
env.config({ path: "./config/.env" })
const PORT = process.env.PORT || 5000
const db = require('./config/db');
const payment = require("./routers/payment-routes")

db()

app.use(cors());
app.use(express.json({ extended: false }))

app.use("/api/payment/", payment)
app.set('port', PORT);
app.use(express.static("client/build"));

// Send every other request to the React app  
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(app.get('port'), () => console.log(`http://localhost:${PORT || 5000}`))
