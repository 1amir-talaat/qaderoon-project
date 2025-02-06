const express = require("express");
const router = express.Router();
const AuthorController = require("../Controllers/authorController");

router.post("/", AuthorController.addAuthor);
router.get("/", AuthorController.getAuthors);
router.get("/:id", AuthorController.getAuthorById);
router.put("/:id", AuthorController.updateAuthor);
router.delete("/:id", AuthorController.deleteAuthor);

module.exports = router;
