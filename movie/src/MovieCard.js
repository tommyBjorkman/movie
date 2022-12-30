import React from "react";
import './MovieCard.css';

const MovieCard = (props) => {

    const api_img ="https://image.tmdb.org/t/p/w500/"

    return (
        <div className="card">
            <div className="poster">
                <img src={props.poster_path ? api_img + props.poster_path : "https://images.pexels.com/photos/10718272/pexels-photo-10718272.jpeg"} />
            </div>
            <div className="info">
                <p className="title">{props.title}</p>
                <p className="vote">{props.vote_average}</p>
            </div>
            <div className="overview">
                <h2 className="title_overview"></h2>
                <h3 className="info_overview">{props.overview}</h3>
            </div>
        </div>
    )
}

export default MovieCard