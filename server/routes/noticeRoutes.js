const express = require("express");
const router = express.Router();
const noticeController = require("../controllers/noticeController");
const auth = require("../middleware/auth");

// Create notice
router.post("/add", auth, noticeController.createNotice);

// Update notice
router.put("/update/:id", auth, noticeController.updateNotice);

// Delete notice
router.delete("/delete/:id", auth, noticeController.deleteNotice);

// Get all notices
router.get("/all", noticeController.getAllNotices);

module.exports = router;
