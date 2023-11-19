const router = require('express').Router();
const {getThoughts,getSingleThought,newThought} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(newThought);
router.route('/:thoughtId').get(getSingleThought);
module.exports = router;
