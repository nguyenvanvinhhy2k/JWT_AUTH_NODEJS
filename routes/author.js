const router = require("express").Router();
const authorController = require("../controllers/authorController");

router.post("/", authorController.addAuthor); // ADD AUTHOR
router.get("/getall", authorController.getAllAuthors); // GET ALL AUTHOR

module.exports = router;
