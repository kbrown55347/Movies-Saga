import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddMovie() {

    const dispatch = useDispatch();
    const history = useHistory();
    
    // make genres reducer accessible here
    const genres = useSelector(store => store.genres)

    // create local state for genre choice
    let [genreId, setGenreId] = useState(0);

    // get genres on page load
    useEffect(() => {
        getGenres();
    }, []);

    // created function to dispatch to get genres
    const getGenres = () => {
        dispatch({
            type: 'FETCH_GENRES'
        });
    };

    // send user to home/list page on click of cancel
    const handleCancelClick = () => {
        history.push('/');
    }

    console.log('in AddMovieForm', genres)

    return (
        <div>
            <form>
                <input type='text' placeholder='Title' />
                <input type='text' placeholder='Poster Image' />
                <textarea type='text' placeholder='Description' />
                {/* drop down with database genres */}
                <select value={genreId}
                    onChange={(evt) => setGenreId(evt.target.value)}>

                    <option disabled value='0'>
                        Select Genre
                    </option>
                    {genres.map((genre) => {
                        return (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        );
                    })}
                </select>
                
                <button onClick={handleCancelClick}>Cancel</button>

                <button>Save</button>

            </form>
        </div>
    );
} // end AddMovie

export default AddMovie;