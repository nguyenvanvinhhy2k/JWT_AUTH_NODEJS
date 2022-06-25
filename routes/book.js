const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.addBook);
router.get("/getall", bookController.getallBooks);

module.exports = router;
