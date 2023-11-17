const router = require('express').Router();
const {createUser,getUsers,getSingleUser,updateUser,deleteUser} = require('../../controllers/userController')

router.route('/').post(createUser).get(getUsers);
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
