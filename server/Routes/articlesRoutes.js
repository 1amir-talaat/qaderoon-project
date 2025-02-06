const express = require("express");
const router = express.Router();
const reportController = require("../Controllers/articleController");

router.post("/", reportController.addReport);
router.get("/", reportController.getReports);
router.get("/:id", reportController.getReportById);
router.put("/:id", reportController.updateReport);
router.delete("/:id", reportController.deleteReport);

module.exports = router;
