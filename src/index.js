import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addNewMovie);
};

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
};

// Saga function to GET details of movie from DB
function* fetchDetails(action) {
    try {
        // action.payload is the clicked movie's id
        const response = yield axios({
            method: 'GET',
            url: `/api/details/${action.payload}`
        });
        // update details Reducer
        // console.log('in fetchDetails, response.data', response.data)
        yield put({
            type: 'SET_DETAILS',
            payload: response.data
        });
    } catch {
        console.log('fetchDetails error');
    };
} // end fetchDetails

// Saga function to GET genres from DB
function* fetchGenres(action) {
    try {
        console.log('in fetchGenres', action)
        const response = yield axios({
            method: 'GET',
            url: '/api/genre'
        });
        // update genres reducer
        yield put({
            type: 'SET_GENRES',
            payload: response.data
        })
    } catch {
        console.log('fetchGenres error');
    };
}; // end fetchGenres

// Saga function to POST new movie
function* addNewMovie(action) {
    try {
        console.log('in addNewMovie', action)
        const response = yield axios({
            method: 'POST',
            url: '/api/movie',
            data: action.payload
        });
        // reload movies list after adding new movie
        yield put({
            type: 'FETCH_MOVIES'
        })
    } catch(err) {
        console.error('Error in addNewMovie', err);
    }
}; // end addNewMovie



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
};

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
};

// used to store the details of clicked movie
const detailsReducer = (state = [{
        id: '', 
        title: '', 
        poster: '',
        description: '',
        movie_id: '',
        genre_id: '',
        name: ''
    }], action) => {
    switch(action.type) {
        case 'SET_DETAILS':
            // console.log('in detailsReducer, action.payload:', action.payload);
            return action.payload;
        default:
            return state;
    }
};

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        detailsReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
