const router = require("express").Router();
const authorController = require("../controllers/authorController");

router.post("/", authorController.addAuthor); // ADD AUTHOR
router.get("/getall", authorController.getAllAuthors); // GET ALL AUTHOR
router.get("/:id", authorController.getAnAuthor); // GET A AUTHOR
router.put("/:id", authorController.updateAuthor); // UPDATE AUTHOR
router.delete("/:id", authorController.deleteAuthor); // DELETE AUTHOR

module.exports = router;
