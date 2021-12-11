## To Do


### Setup

- [x] npm install, create components
- [x] On home/list page, setup link to go to Add Movie

### DetailsView

- [x] On click of movie poster, route (useHistory) to /details page to display description of that movie
- [x] setup routes to each page

*Client to Server to Database*
- [x] add '/api/details' route in server.js
- [x] setup GET route in details.router to get a particular movie's details (by id) (will need a join table query for this)
- [x] In movieList component, setup dispatch to Saga function
- In index.js:
    - [x] create detailsReducer
    - [x] setup Saga function to axios get movie description from db '/api/details/:id' route 
    - [x] send results to detailsReducer
- In Details components:
    - [x] display details on DOM
    - [x] create and wire Back to List button, to go to home/list page

### AddMovieForm

- Display on DOM:
    - input field (movie title), input field (movie poster image URL), textarea (description) and dropdown (for genres)
    - cancel button, route to home/list page
    - save button, save inputs in database and bring user to home/list page (POST route already created)
- [ ] In index.js, create Saga function to POST new movie info to movies reducer & to genres reducer
- In AddMovieForm component:
    - [ ] wire input fields to store info in local state
    - [ ] create function to dispatch local state of new movie to Saga function
- [ ] import add movie form to app.js and setup route/link 

- [ ] Add styling! MUI?