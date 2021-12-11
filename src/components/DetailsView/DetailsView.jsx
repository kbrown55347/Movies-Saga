import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function DetailsView() {

    const history = useHistory();
    // access detailsReducer
    const detailsReducer = useSelector(store => store.detailsReducer);

    // function to bring user back to movies list page on click
    const handleButtonClick = () => {
        history.push('/');
    }
    
    return (
        <div>
            <h2>Movie Details</h2>
            <div>
                {/* only need to display title once */}
                <p>Movie Title: {detailsReducer[0].title}</p>
                <br></br>
                <img
                    // only need to display poster once 
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
                {/* only need to display description once */}
                <p>Movie Description: {detailsReducer[0].description}</p>
            </div>

            <button onClick={handleButtonClick}>See Movies List</button>

        </div>
    );
} // end DetailsView

export default DetailsView;