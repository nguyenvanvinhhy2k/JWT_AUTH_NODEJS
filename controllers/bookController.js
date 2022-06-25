const { Book, Author } = require("../models/model");

const bookController = {
  // ADD BOOK
  addBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const addBook = await newBook.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: saveBook._id } });
      }
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
  //GET A BOOK
  getAnBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //UPDATE A BOOK
  updateBook: async (req, res) => {
    try {
      const book = Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Update Successfull!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // DELETE BOOK
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfull!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
