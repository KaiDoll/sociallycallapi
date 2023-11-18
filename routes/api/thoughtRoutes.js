const router = require('express').Router();
const {getThoughts,newThought} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(newThought);
module.exports = router;
