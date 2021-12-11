import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';

function AddMovie () {

    const dispatch = useDispatch();
    // make genres reducer accessible here
    const genres = useSelector(store => store.genres)

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

    console.log('in AddMovieForm', genres)

    return (
        <div>
            <form>
                <input type='text' placeholder='Title'/>
                <input type='text' placeholder='Poster Image'/>
                <textarea type='text' placeholder='Description'/>

            </form>
        </div>
    );
} // end AddMovie

export default AddMovie;