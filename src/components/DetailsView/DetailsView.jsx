import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
// import component CSS
import './DetailsView.css';
// import MUI button and box
import { Button } from '@mui/material';
import Box from '@material-ui/core/Box';

function DetailsView() {

    const history = useHistory();
    // access detailsReducer
    const detailsReducer = useSelector(store => store.detailsReducer);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // return to home/list view on click of button
    const handleBackToListClick = () => {
        history.push('/');
    } // end handleBackToListClick

    return (
        <main>
            <h1 className="details_title">Movie Details</h1>

            <h3>{detailsReducer[0].title}</h3>
            <img
                // only need to display poster once 
                src={detailsReducer[0].poster}
                alt='Movie Poster'
            />

            {/* only need to display title once */}
            <p><b>Genres: </b></p>
            {/* // map through detailsReduce and display each genre name */}
            {detailsReducer.map(genre => (
                <div key={genre.id}>
                    {genre.name}
                </div>
            ))}

            {/* only need to display description once */}
            <p><b>Description:</b> {detailsReducer[0].description}</p>

            <Box mt={3}>
                <Button
                    variant="contained"
                    style={{ backgroundColor: 'white', color: 'black' }}
                    onClick={handleBackToListClick}>Back To List</Button>
            </Box>

        </main>
    );
} // end DetailsView

export default DetailsView;