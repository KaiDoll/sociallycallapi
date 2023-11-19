const { Thought, User } = require("../models");

module.exports = {
  //get all thoughts
  async getThoughts(req, res) {
    try {
      const getThoughts = await Thought.find();
      res.json(getThoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //get single thought by its id
async getSingleThought(req,res) {
  try {
    const getSingleThought = await Thought.findOne({_id: req.params.thoughtId})
    res.json(getSingleThought)
  } catch (error) {
    res.status(500).json(error)
    
  }
},
  //create new thought id look at the example
  async newThought(req, res) {
    try {
      const newThought = await Thought.create(req.body); //req because you are expecting something from the client.
      const findUser = await User.findOneAndUpdate( //since the thought is from a user you need to find the user via its id from the user model
        { _id: req.body.userId },//finds the user associated with its id
        { $push: { thoughts: newThought._id } }, //pushing it to thoughts array to its associated id
        { runValidators: true, new: true }
      );

      res.json(newThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //update thought by its id

  //delete thought by its id

  //post reaction

  //delete reaction
};
