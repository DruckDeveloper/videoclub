//  Import express
const router = require("express").Router();
//  Import schema 
const movies = require('../models/Video');

//  HTTP Get method, retrieves the movies from the collection
router.get("/", (req, res) => {
    //  Mongoose find method to query the movies 
    movies.find((err, result) => {
        //   Error handling
        if(err) throw new Error(err);
        //  Returned to the client as a JSON result
        res.json(result);
    });
});

//  HTTP Post method, adds a new movie to the document into movies
router.post("/", (req, res) => {
    movies.create(req.body, (err, result) => {
        //   Error handling
        if(err) throw new Error(err);
        res.json(result);
    });
});

//  HTTP put method, updates a movie in the collection, 
router.put("/:id", (req, res) => {
    //  Mongoose method to find and uprdate a single document
    movies.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        //  Error handling
        if(err) throw new Error(err);
        //  Returned to the client as a JSON result
        res.json(result);
    });
});

//  HTTP delete method, delete movie items from the colection 
router.delete("/:id", (req, res) => {
    movies.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        //   Error handling
        if(err) throw new Error(err);
        res.end();
    });
});

//  Export router 
module.exports = router;