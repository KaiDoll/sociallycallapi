const router = require('express').Router();
const {getThoughts,getSingleThought,newThought,updateThought} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(newThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought)
module.exports = router;
