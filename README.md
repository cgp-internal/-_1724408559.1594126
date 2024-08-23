Web Server Application README
=============================

This is a web server application built with Node.js, Express, and Leaflet.js. The application provides APIs to handle flight requests and serves an interactive map for users to draw polygons.

How to Run
==========

1. Install Node.js if you haven't already.
2. Run the `run.sh` script to initialize the project and install dependencies.
3. Start the server by running `node app.js`.
4. Open a web browser and navigate to `http://localhost:3000` to access the interactive map.

Documentation
------------

The application is structured into several components:

* `app.js`: The main entry point for the application, setting up the Express server and defining routes.
* `controllers/api.js`: Handles API requests for flight requests.
* `controllers/map.js`: Handles requests and responses related to the interactive map.
* `models/flightRequest.js`: Implements data access for flight requests using SQLite as the database.
* `public/index.html`: The main client-side HTML file, containing the map canvas and user interface for drawing polygons.
* `public/js/map.js`: Client-side JavaScript file, handling Leaflet.js map interactions and polygon drawing.
* `db/db.js`: Database configuration file, setting up the SQLite database connection.

Note: This README provides basic documentation and a guide on how to run the application. For more information, please refer to the individual component files.