const { User } = require("../models");

module.exports = {
  
  async getUsers(req, res) {
    try {
     const getAllUsers = await User.find();
     res.json(getAllUsers)
    } catch (error) {
      res.status(500).json(error)
    }
  },

  async getSingleUser(req, res) {
    try {
      const getSingleUser = await User.findOne({_id: req.params.userId})
       //find through id and need to establish different route since it is a param.
      res.json(getSingleUser)
    } catch (error) {
      res.status(500).json(error)
    }
  },

  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body)
      res.json(newUser)
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async updateUser(req, res) { 
    try {
      const updateUser = await User.findOneAndUpdate(
        {_id: req.params.userId}, //need these parameters whenever we update user. Find the :id
        {$set: req.body}, // setting/updating the req.body of the id.
        { runValidators: true, new: true} //looks at the schema if anything is required before update, new:true gives you the updated user. 
        );

        if(!updateUser) {
          return res.status(404).json({message:'User with the id not found'})
        }
      res.json(updateUser)
    } catch (error) {
      res.status(500).json(error)
    }
  },
  //delete user
  async deleteUser(req, res) {},
  //add friend
  async addFriend(req, res) {}, //delete friend
  async deleteFriend(req, res) {},
};
