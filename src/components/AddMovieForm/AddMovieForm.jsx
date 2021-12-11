import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddMovie() {

    const dispatch = useDispatch();
    const history = useHistory();

    // make genres reducer accessible here
    const genres = useSelector(store => store.genres)

    // create local states for genre choice, movie title, 
    // movie poster url and movie description
    let [genreId, setGenreId] = useState(0);
    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');

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

    // create function to handle click of add button
    const handleAddClick = () => {
        // bundle new movie into object to dispatch
        const movieToAdd = {title, poster, description, genreId};
        console.log(movieToAdd);

        if ( title === '' || poster === '' || description === '') {
            alert('Please fill out all information fields to add movie to the list.');
        } else if ( genreId === 0) {
            alert('Please select a genre to add movie to the list.');
        } else {    
            dispatch({
            type: 'ADD_MOVIE',
            payload: movieToAdd
            });
            history.push('/');
        };

    }; // end handleAddClick

    // send user to home/list page on click of cancel
    const handleReturnClick = () => {
        history.push('/');
    };

    return (
        <div>
            <form>
                <input type='text' 
                    value={title}
                    placeholder='Title'
                    onChange={(event) => setTitle(event.target.value)}/>
                <input type='text' 
                    value={poster}
                    placeholder='Poster Image'
                    onChange={(event) => setPoster(event.target.value)}/>
                <textarea type='text'
                    value={description} 
                    placeholder='Description' 
                    onChange={(event) => setDescription(event.target.value)}/>

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

                <button onClick={handleAddClick}>Add to List</button>
                <br></br>
                <button onClick={handleReturnClick}>Return to List</button>

            </form>
        </div>
    );
} // end AddMovie

export default AddMovie;