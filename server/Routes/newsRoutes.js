const express = require("express");
const router = express.Router();
const newsController = require("../Controllers/newsController");

router.post("/", newsController.addNews);
router.get("/", newsController.getNews);
router.get("/:id", newsController.getNewsById);
router.put("/:id", newsController.updateNews);
router.delete("/:id", newsController.deleteNews);

module.exports = router;
