const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

const PORT = 3030;
const app = express();

const videoRoutes = require("./routes/videoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());
app.use(cors());

const dbuser = process.env.VITE_USER;
const dbpass = process.env.VITE_PASS;

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@videoclub.n2m4frn.mongodb.net/movie`, connectionOptions)
    .then(() => console.log("Connected successfully, with Atlass"))
    .catch((err) => console.error(err));

app.use("/video", videoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
}); 