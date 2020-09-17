const models = require("./models");

module.exports = {
  getAll: function (req, res) {
    models.readAll(function (err, result) {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(result);
      }
    });
  },

  postOne: function (req, res) {
    let params = [req.body.name, req.body.description];
    models.create(params, function (err, result) {
      if (err) {
        console.log('failed')
        res.sendStatus(404);
      } else {
        console.log('success')
        res.sendStatus(200);
      }
    });
  },

  update: function (req, res) {
    let params = [req.body.name, req.params.id];
    models.update(params, (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        res.status(200).json(result)
      }
    })
  },

  delete: function (req, res) {
    let params = req.params.id;
    models.delete(params, (err, result) => {
      data = result
      if (err) {
        res.sendStatus(404)
      } else {
        res.sendStatus(200)
      }
    })
  }
};
