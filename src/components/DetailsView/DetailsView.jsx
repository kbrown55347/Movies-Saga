import { useSelector } from 'react-redux';
// import CSS
import './DetailsView.css';

function DetailsView() {

    // access detailsReducer
    const detailsReducer = useSelector(store => store.detailsReducer);
    
    return (
        <main>
            <h1 className="details_title">Movie Details</h1>
            <p className="directions">Click 'Home' in the menu bar above to go back to the Movie List.</p>
                
                <h3>{detailsReducer[0].title}</h3>
                <div className="details_image">
                    <img
                        // only need to display poster once 
                        src={detailsReducer[0].poster}
                        alt='Movie Poster' />
                </div>

                {/* only need to display title once */}
                <div className="description_content">
                    <p><b>Genres: </b></p>
                        {/* // map through detailsReduce and display each genre name */}
                        {detailsReducer.map(genre => (
                            <div key={genre.id}>
                                {genre.name}
                            </div>
                        ))}

                    {/* only need to display description once */}
                    <p><b>Description:</b> {detailsReducer[0].description}</p>
                </div> 

        </main>
    );
} // end DetailsView

export default DetailsView;