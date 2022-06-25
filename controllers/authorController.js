const { Author, Book } = require("../models/model");

const authorController = {
  // ADD AUTHOR
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const saveAuthor = await newAuthor.save();
      if (req.body.author) {
        const author = Book.findById(req.body.author);
        await author.updateOne({ $push: { author: saveAuthor._id } });
      }
      res.status(200).json(saveAuthor);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET ALL
  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // GET A AUTHOR
  getAnAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // UPDATE AUTHOR
  updateAuthor: async (req, res) => {
    try {
      const author = Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("Update Successfull!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // DELETE AUTHOR
  deleteAuthor: async (req, res) => {
    try {
      await Author.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfull!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authorController;
