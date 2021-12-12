import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // create function on click of image
    const handleImageClick = (event) => {
        // send dispatch to Saga function with movie's id
        dispatch({
            type: 'FETCH_DETAILS',
            payload: event.target.id
        });
        // route to /details page
        history.push('/details');
    }; // end handleImageClick

    return (
        <main>
            <div>
                <h1 className="list_title">Movie List</h1>
                <p className="directions">Click on a movie poster to view more details about that movie.</p>
            </div>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="card">
                            <div className="container">
                                <h3>{movie.title}</h3>
                            </div>
                            <img className="movie_poster"
                                id={movie.id}
                                src={movie.poster}
                                alt={movie.title}
                                onClick={handleImageClick} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;