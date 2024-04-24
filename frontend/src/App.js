// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePlayer from "./components/movieplayer";
import HomePage from "./components/homepage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:title" element={<MoviePlayer />} />
            </Routes>
        </Router>
    );
}

export default App;
