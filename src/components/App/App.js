import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';

// import components
import DetailsView from '../DetailsView/DetailsView';
import AddMovie from '../AddMovieForm/AddMovieForm';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Router> 

        {/* Headers page */}
        <Header />

        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details" exact>
          <DetailsView />
        </Route>

        {/* Add Movie page */}
        <Route path="/add-movie" exact>
          <AddMovie />
        </Route>

      </Router>
    </div>
  );
}


export default App;
