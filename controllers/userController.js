const { User } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const getAllUsers = await User.find(); //find all the users
      res.json(getAllUsers); //response json to display all the users.
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async getSingleUser(req, res) {
    try {
      const getSingleUser = await User.findOne({ _id: req.params.userId });
      //find through id and need to establish different route since it is a param.
      res.json(getSingleUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async updateUser(req, res) {
    try {
      const updateUser = await User.findOneAndUpdate(
        { _id: req.params.userId }, //need these parameters whenever we update user. Find the :id
        { $set: req.body }, // setting/updating the req.body of the id.
        { runValidators: true, new: true } //looks at the schema if anything is required before update, new:true gives you the updated user.
      );

      if (!updateUser) {
        return res.status(404).json({ message: "User with the id not found" });
      }
      res.json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //delete user
  async deleteUser(req, res) {
    try {
      const deleteUser = await User.findOneAndDelete({
        _id: req.params.userId,
      }); //finds user looking at id

      if (!deleteUser) {
        return res.status(404).json({ message: "User with the id not found" });
      }
      res.json(deleteUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //add friend. Can we have a function with two methods?
  async addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    try {
      const addFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } }, //did req.body but was not registering so changed it to params since the model only asks for ID!
        { runValidators: true, new: true }
      );
      if (!addFriend) {
        return res.status(404).json({ message: 'User not found.' });
      }
      res.json(addFriend);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //delete friend
  async deleteFriend(req, res) {},
};
