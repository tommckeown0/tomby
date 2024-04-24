import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

const MoviePlayer = () => {
    const { title } = useParams();
    const [moviePath, setMoviePath] = useState("");

    useEffect(() => {
        axios
            .get(
                `http://localhost:3001/movies/title/${encodeURIComponent(
                    title
                )}`
            )
            .then((response) => {
                const fullPath = `http://localhost:3001/videos/${encodeURIComponent(
                    response.data[0].path
                )}`;
                console.log("fullPath:", fullPath);
                setMoviePath(fullPath);
            })
            .catch((error) => console.error("Error fetching movie:", error));
    }, [title]);

    return (
        <div>
            <Link to="/" style={{ textDecoration: "none" }}>
                <button style={{ margin: "10px", padding: "10px" }}>
                    Home
                </button>
            </Link>
            <h2>Playing: {title}</h2>
            <ReactPlayer
                url={moviePath}
                controls={true}
                playing={true}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default MoviePlayer;
