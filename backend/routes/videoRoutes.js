const router = require("express").Router();
const movies = require('../models/Video');

router.get("/", (req, res) => {
    movies.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
        console.log("Estoy en videorouters", result)
    });
});

router.post("/", (req, res) => {
    movies.create(req.body, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.put("/:id", (req, res) => {
    movies.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.delete("/:id", (req, res) => {
    movies.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if(err) throw new Error(err);
        res.end();
    });
});

module.exports = router;