import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';

// import components
import DetailsView from '../DetailsView/DetailsView';
import AddMovie from '../AddMovieForm/AddMovieForm';

function App() {
  return (
    <div className="App">
      <Router>  
      <header>
      <h1>The Movies Saga!</h1>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/add-movie">Add New Movie</Link>
      </header>      
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
