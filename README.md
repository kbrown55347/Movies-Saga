# The Movies Saga

## Description

*Duration: 2 day sprint*

With this project, I expanded on a movie management application. The application displayed movies on a page to begin with. I added the option to access detailed views for each individual movie and the ability to add a new movie to the collection. 

<!-- On the pages where the user enters their feedback, I captured these values and used reducers to store them. Then by importing the redux store, I accessed the values within the reducers to display the user's feedback on the review page. Lastly I used an axios POST route to store the user's feedback in the SQL database.

![Working Image](/public/FeedbackLoopDemo.gif) -->

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

1. Create a database named `saga_movies_weekend`.

2. The queries in the `database.sql` file are setup to create and populate the necessary tables to allow the application to run correctly. The project is built on [PostgreSQL](https://www.postgresql.org/download/), so you will need to have that installed. I recommend using [Postico](https://eggerapps.at/postico/) to run the queries.

3. Open your editor of choice and run an `npm install` in your terminal to install the project's node dependencies.

4. Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`. 

5. Run `npm run server` in your terminal to start the server.

6. Open a new terminal tab and run `npm run client` to start the react client app.

## Usage

1. On the home page, click on a movie poster to view more details about that movie. This will bring you to a details page.

2. The details page lists the movie's title, poster, genre(s) and description. Click the BACK TO LIST button to return to the home page.

3. To add a new movie to the list, click on Add Movie in the menu bar. This will bring you to a new page. On this page, input the movie's title, poster image url, description and select the movie's genre from the drop-down menu. All fields must be filled out and a genre selected to be able to add the movie to the collection. Click ADD TO LIST to add the movie and return to the home page, or click CANCEL to return to the home page without adding the movie to the collection. 

## Built With

- React, Redux, JavaScript, SQL, Node.js, Express.js, MUI, HTML, CSS

## Acknowledgment

Thank you to Prime Digital Academy, my instructor Matthew Black, and my classmates who equipped and helped me to create this application.

## Support

If you have suggestions or issues, please email me at kbrown55347@gmail.com.