const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.getAllMovie);
router.post("/", movieController.addMovie);
router.get("/:id", movieController.getAnMovie);

module.exports = router;
