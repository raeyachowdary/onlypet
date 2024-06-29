const express = require('express');
const { getPetSitters, createPetSitter, bookPetSitter } = require('../controllers/petSitterController');
const router = express.Router();

router.get('/', getPetSitters);
router.post('/', createPetSitter);
router.post('/book', bookPetSitter);

module.exports = router;
