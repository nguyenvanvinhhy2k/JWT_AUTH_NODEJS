const { Book, Author } = require("../models/model");

const bookController = {
  // ADD BOOK
  addBook: async (req, res) => {
    try {
      const book = new Book(req.body);
      const addBook = await book.save();
      res.status(200).json(addBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //GET ALL BOOK
  getallBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
