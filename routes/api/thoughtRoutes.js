const router = require('express').Router();
const {getThoughts,getSingleThought,newThought,updateThought, deleteThought,createReaction} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(newThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route("/:thoughtId/reactions").post(createReaction)
module.exports = router;
