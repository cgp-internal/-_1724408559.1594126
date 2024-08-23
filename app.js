const express = require('express');
const app = express();
const flightRequestRouter = require('./controllers/api');
const mapRouter = require('./controllers/map');
const { SQLiteDB } = require('./models/flightRequest');

app.use('/api', flightRequestRouter);
app.use('/map', mapRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});