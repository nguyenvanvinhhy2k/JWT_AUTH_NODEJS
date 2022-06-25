const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.addBook); // ADD BOOK

router.get("/getall", bookController.getallBooks); // GET ALL BOOK

router.get("/:id", bookController.getAnBook); // GET A BOOK

router.put("/:id", bookController.updateBook); // UPDATE BOOK

router.delete("/:id", bookController.deleteBook); // DELETE BOOK

module.exports = router;
