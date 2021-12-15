import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import MUI for buttons and input fields
import { Button, TextField, NativeSelect } from '@mui/material';
import Box from '@material-ui/core/Box';

// import component CSS
import './AddMovieForm.css';

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
        window.scrollTo(0, 0);
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
        const movieToAdd = { title, poster, description, genreId };
        console.log(movieToAdd);

        if (title === '' || poster === '' || description === '') {
            alert('Please fill out all information fields to add movie to the list.');
        } else if (genreId === 0) {
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
    const handleCancelClick = () => {
        history.push('/');
    };

    return (
        <main>
            <h1 className="add_movie_title">Add New Movie</h1>
            <p className="directions">Fill out all fields and select a genre to add a new movie to the movie list.</p>
            <form>

                <Box mt={3}>
                    <TextField
                        variant="standard"
                        type='text'
                        value={title}
                        placeholder='Title'
                        onChange={(event) => setTitle(event.target.value)} />
                </Box>

                <Box mt={3}>
                    <TextField
                        variant="standard"
                        type='text'
                        value={poster}
                        placeholder='Poster Image URL'
                        onChange={(event) => setPoster(event.target.value)} />
                </Box>

                <Box mt={3}>
                    <TextField
                        multiline
                        rows={4}
                        type='text'
                        value={description}
                        placeholder='Description'
                        onChange={(event) => setDescription(event.target.value)} />
                </Box>

                <Box mt={3}>
                    {/* drop down with database genres */}
                    <NativeSelect
                        value={genreId}
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
                    </NativeSelect>
                </Box>

                <Box mt={3}>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#8fa253', color: 'white' }}
                        onClick={handleAddClick}>Add to List</Button>
                </Box>

                <Box mt={3}>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'white', color: 'black' }}
                        onClick={handleCancelClick}>Cancel</Button>
                </Box>

            </form>
        </main>
    );
} // end AddMovie

export default AddMovie;