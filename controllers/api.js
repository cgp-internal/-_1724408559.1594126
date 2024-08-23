const express = require('express');
const router = express.Router();
const { processFlightRequest, SQLiteDB } = require('../models/flightRequest');

router.post('/create', (req, res) => {
  const polygon = req.body.polygon;
  const dbFile = 'flight_requests.db';
  const flightRequest = new FlightRequest(dbFile);
  flightRequest.createTable()
    .then(() => flightRequest.processFlightRequest(polygon))
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get('/getAll', (req, res) => {
  const dbFile = 'flight_requests.db';
  const flightRequest = new FlightRequest(dbFile);
  flightRequest.getFlightRequests()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const dbFile = 'flight_requests.db';
  const flightRequest = new FlightRequest(dbFile);
  flightRequest.getFlightRequest(id)
    .then((result) => res.json(result))
    .catch((err) => res.status(404).json({ error: err.message }));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const dbFile = 'flight_requests.db';
  const flightRequest = new FlightRequest(dbFile);
  flightRequest.deleteFlightRequest(id)
    .then(() => res.json({ message: `Flight request ${id} deleted` }))
    .catch((err) => res.status(404).json({ error: err.message }));
});

module.exports = router;