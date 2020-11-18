import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({title, year, summary, poster, genres}){
    return(
        <div className="movie">
            <Link to={{ pathname: '/movie-detail', state: { year, title, summary, poster, genres } }}>
                <img src = {poster} alt={title} title={title}></img>
                <div className="movie_data"> 
                    <h3 className="movie_title">{title}</h3>
                    <h3 className="movie_year">{year}</h3>
                    <ul className="movie_genres">
                        {genres.map(
                            (genre, index)=>{
                                return <li key={index} className="movie_genre">{genre}</li>
                            }
                        )}
                    </ul>
                    <h3 className="movie_summary">{summary.slice(0,180)}</h3>
                </div>
            </Link>
        </div>

    ) 
}

Movie.protoTypes = {
    // id : PropTypes.number.isRequired, 
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.String).isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};
export default Movie;