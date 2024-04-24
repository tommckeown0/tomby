const express = require("express");
const cors = require("cors");
const movieRoutes = require("./routes/movie_routes"); // Movie routes

require("./db"); // Database connection

const app = express();
const port = process.env.PORT || 3001; // Port configuration

app.use(cors());
app.use(express.json());
app.use("/movies", movieRoutes); // Movie routes
app.use("/videos", express.static("C:\\Users\\tommc\\Documents\\Torrents"));

// Basic route for home page
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
