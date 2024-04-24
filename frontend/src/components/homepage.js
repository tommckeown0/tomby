import React from "react";
import "./homepage.css"; // Assuming you will have some custom CSS for this page
import MovieList from "./movielist";

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to My Media Streamer</h1>
            <MovieList />
            <p>
                Explore a vast collection of movies and TV shows on any device,
                anywhere.
            </p>
            <div className="featured-content">
                <h2>Featured Movies</h2>
                {/* Placeholder for featured movies */}
                <div className="movies-list">
                    <div className="movie">
                        <h3>Movie Title One</h3>
                        <p>
                            Description of the movie goes here. This could
                            include a brief synopsis.
                        </p>
                    </div>
                    <div className="movie">
                        <h3>Movie Title Two</h3>
                        <p>
                            Description of the movie goes here. This could
                            include a brief synopsis.
                        </p>
                    </div>
                    {/* Add more movies or use a component to render movies based on an array */}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
