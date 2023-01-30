const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());
app.use(cors());

/* const dbuser=process.env.DB_USER;
const dbpass=process.env.DB_PASS; */


mongoose.connect(`mongodb+srv://appuser:Movie4527Project02@videoclub.n2m4frn.mongodb.net/test`, connectionOptions)
    .then(() => console.log("Connected successfully, with Atlass"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
}); 