import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/movies"
                ); // Adjust if your URL is different
                setMovies(response.data);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Available Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>
                        <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
