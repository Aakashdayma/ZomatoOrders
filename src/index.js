const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
// Import the database connection pool
const pool = require('./connector');

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import the setupDatabase function
const setupDatabase = require('./createDatabase');

const DEFAULT_LIMIT = 10
const DEFAULT_OFFSET = 0

// Set up the database and start the server
async function startServer() {
  try {
    await setupDatabase(); // Set up the database
    console.log("Database initialization successful");

    // Define your API routes here
    app.get('/api/orders', (req, res) => {
      // ... Your orders fetching code ...
      const offset = parseInt(req.query.offset) || DEFAULT_OFFSET;
      const limit = parseInt(req.query.limit) || DEFAULT_LIMIT;

      const query = `SELECT * FROM orders LIMIT ${limit} OFFSET ${offset}`;

      // Use the connection pool to execute queries
      pool.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching orders:', err);
            res.status(500).json({ code: 500, error: 'Internal Server Error' });
        } else if (results.length === 0) {
            console.error('Orders not found in the orders table');
            res.status(404).json({ code: 404, error: 'Orders not found in the orders table' });
        } else {
            res.status(200).json({ code: 200, result: results });
        }
    });
    });

    // Start the Express server
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Start the server
startServer();
