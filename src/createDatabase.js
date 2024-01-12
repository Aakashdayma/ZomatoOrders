// createDatabase.js
const con = require('./connector');
const data = require('./data');

async function setupDatabase() {
  try {
    // drop table is already exist
    await new Promise((resolve, reject) => {
      con.query('DROP TABLE IF EXISTS orders', (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
    // create table orders
    await new Promise((resolve, reject) => {
      con.query('CREATE TABLE orders(_id varchar(200), title varchar(100), description varchar(1000) )', (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    // insert values in orders table
    for (let i = 0; i < data.length; i++) {
      await new Promise((resolve, reject) => {
        const { _id, title, description } = data[i];
        con.query(`INSERT INTO orders VALUES("${_id}", "${title}", "${description}")`, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    }
    // get values from database(orders table)
    const [error, result] = await new Promise((resolve, reject) => {
      con.query('SELECT * FROM orders', (err, results) => {
        if (err) reject([err, undefined]);
        else resolve([undefined, results]);
      });
    });

    if (error) {
      console.log(error);
    }
  } catch (err) {
    console.error("Error during database setup:", err);
  }
}

module.exports = setupDatabase;
