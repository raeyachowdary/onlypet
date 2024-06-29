const express = require('express');
const { getServices, createService } = require('../controllers/serviceController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getServices);
router.post('/', auth, createService);

module.exports = router;
