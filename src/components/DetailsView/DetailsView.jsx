import { useSelector } from 'react-redux';

function DetailsView() {

    // access detailsReducer
    const detailsReducer = useSelector(store => store.detailsReducer);
    
    return (
        <div>
            <h2>Movie Details</h2>
            <div>
                <p>Movie Title: {detailsReducer[0].title}</p>
                <br></br>
                <img
                    src={detailsReducer[0].poster}
                    alt='Movie Poster'
                />
                <ul>
                    {/* map through reducer to display each 
                    genre associated with movie */}
                    {detailsReducer.map(genre => (
                        <li key={genre.id}>
                            {/* display genre name */}
                            {genre.name}
                        </li>
                    ))}
                </ul>
                <p>Movie Description: {detailsReducer[0].description}</p>
            </div>
        </div>
    );
} // end DetailsView

export default DetailsView;