const db = require("./db/index.js");

module.exports = {
  readAll: function (callback) {
    let qryStr = "SELECT name, description FROM cows ORDER BY id DESC";
    db.query(qryStr, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  create: function (params, callback) {
    let qryStr = "INSERT INTO cows (name, description) values (?, ?)";
    db.query(qryStr, params, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  update: function (params, callback) {
    let qryStr = 'UPDATE cows SET name = (?), description = (?) WHERE id = (?)';
    db.query(qryStr, params, (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result)
      }
    })
  },

  delete: function (params, callback) {
    let qryStr = 'DELETE FROM cows WHERE id = ?'
    db.query(qryStr, params, (err, result) => {
      if (err) {
        callback (err, null)
      } else {
        callback(null, result)
      }
    })
  }
};
