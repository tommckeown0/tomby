const mongoose = require("mongoose");

//const dbURI = 'mongodb://localhost:27017/yourDatabaseName'; // Local MongoDB URI
const dbURI =
    "mongodb+srv://tommckeown909:w9vqHEVRvZiw9uzv@cluster0.tmdhpam.mongodb.net/db1";

mongoose
    .connect(dbURI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
