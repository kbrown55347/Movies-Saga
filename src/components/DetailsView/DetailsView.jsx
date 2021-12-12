import { useSelector } from 'react-redux';
// import component CSS
import './DetailsView.css';

function DetailsView() {

    // access detailsReducer
    const detailsReducer = useSelector(store => store.detailsReducer);

    return (
        <main>
            <h1 className="details_title">Movie Details</h1>
            <p className="directions">Click 'Home' in the menu bar above to go back to the Movie List.</p>

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

        </main>
    );
} // end DetailsView

export default DetailsView;