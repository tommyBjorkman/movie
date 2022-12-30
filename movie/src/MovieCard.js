import React from "react";
import './MovieCard.css';

const MovieCard = (props) => {

    const api_img ="https://image.tmdb.org/t/p/w500/"

    return (
        <div className="card">
            <div className="poster">
                <img src={api_img + props.poster_path} />
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