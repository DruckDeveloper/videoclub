//  Mongoose library import
const mongoose = require("mongoose");

//  Configuration of the data schema fetched from the database
const VideoSchema = new mongoose.Schema({
    title: String,
    year: Number,
    time: Number,
    lang: String,
    rel: Date,
    rel_country: String
});

//  Data model export
module.exports = mongoose.model("movies", VideoSchema);