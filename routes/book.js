const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.addBook);
router.get("/getall", bookController.getallBooks);
router.get("/:id", bookController.getAnBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id")

module.exports = router;
