const express = require('express');
const router = express.Router();
const AdminController = require('../Controllers/adminController');
// Add Admin
// router.post('/add', AdminController.registerAdmin);
    // Admin Login
router.post('/login', AdminController.loginAdmin);
// Admin verify
router.post('/verify', AdminController.getAdminWithToken);

module.exports = router;
