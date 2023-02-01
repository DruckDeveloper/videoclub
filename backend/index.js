const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

//  Port assignment
const PORT = process.env.PORT || 3030;
const app = express();

const videoRoutes = require("./routes/videoRoutes");
//  URI options for mongodb connection
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json())
app.use(cors());

//  Environment variables for database user 
const dbuser = process.env.VITE_USER;
const dbpass = process.env.VITE_PASS;

//  Connection to the database in mongoDB
mongoose.connect(`mongodb+srv:// ${dbuser}:${dbpass}@videoclub.n2m4frn.mongodb.net/videoclub?retryWrites=true&w=majority`, connectionOptions)
    // Error handling with promises
    .then(() => console.log("Connected successfully, with Atlass"))
    .catch((err) => console.error(err));

//  Assignment of any type of request to a specific route
app.use("/movies", videoRoutes);

//  Function that listens on the specified port
app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
}); 