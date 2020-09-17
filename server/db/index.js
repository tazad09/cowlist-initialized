const mysql = require ('mysql');

const connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'tasnim',
  database: 'cowlist'
});

connection.connect(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected!')
  }
})

module.exports = connection;