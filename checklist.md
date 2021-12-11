## To Do


### Setup

- [x] npm install, create components
- [ ] On home/list page, setup link to go to Add Movie

### DetailsView

- [x] On click of movie poster, route (useHistory) to /details page to display description of that movie
- [ ] setup routes to each page

*Database to Server to Client*
- [ ] add '/api/details' route in server.js
- [ ] setup GET route in details.router to get a particular movie's details (by id) (title, poster, description AND genres -- will need a join table query for this)
- In index.js:
    - [ ] create detailsReducer
    - [ ] setup Saga function to axios get movie description from db '/api/details' route 
    - [ ] send results to detailsReducer
- In Details components:
    - [ ] setup dispatch to Saga function for details
    - [ ] display details on DOM
    - [ ] create and wire Back to List button, to go to home/list page
- [ ] import details view to app.js and setup route/link

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