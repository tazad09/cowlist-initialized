const controller = require('./controllers');
const router = require('express').Router();


router.get('/cows', controller.getAll);

router.post('/cows', controller.postOne);

router.put('/cows/:id', controller.update);

router.delete('/cows/:id', controller.delete);

module.exports = router;