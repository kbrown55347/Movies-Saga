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
        // get id from image clicked
        console.log(event.target.id);
        // send dispatch to Saga function with movie's id
        dispatch({
            type: 'ADD_DETAILS',
            payload: event.target.id
        });
        // route to /details page
        history.push('/details');
    }; // end handleImageClick

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <h3>{movie.title}</h3>
                            <img 
                            id={movie.id}
                            src={movie.poster} 
                            alt={movie.title}
                            onClick={handleImageClick}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;