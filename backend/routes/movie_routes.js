const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// Route to get all movies
router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find(); // Fetch all movies from the database
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/title/:title", async (req, res) => {
    try {
        const movies = await Movie.find({ title: req.params.title });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/path/:path", async (req, res) => {
    try {
        const movies = await Movie.find({ path: req.params.path });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/movies/title/:title", async (req, res) => {
    try {
        const movie = await Movie.findOne({ title: req.params.title });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
