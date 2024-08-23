const SQLiteDB = require('./db/db');

class FlightRequest {
  constructor(dbFile) {
    this.db = new SQLiteDB(dbFile);
  }

  createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS flight_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      polygon TEXT NOT NULL
    );`;
    return this.db.run(sql);
  }

  insertFlightRequest(polygon) {
    const sql = 'INSERT INTO flight_requests (polygon) VALUES (?);';
    return this.db.run(sql, [polygon]);
  }

  getFlightRequest(id) {
    const sql = 'SELECT polygon FROM flight_requests WHERE id = ?;';
    return this.db.get(sql, [id]);
  }

  getFlightRequests() {
    const sql = 'SELECT * FROM flight_requests;';
    return this.db.all(sql);
  }

  deleteFlightRequest(id) {
    const sql = 'DELETE FROM flight_requests WHERE id = ?;';
    return this.db.run(sql, [id]);
  }

  close() {
    return this.db.close();
  }

  processFlightRequest(polygon) {
    return this.insertFlightRequest(polygon)
      .then(() => this.getFlightRequests());
  }
}

module.exports = { processFlightRequest, SQLiteDB };