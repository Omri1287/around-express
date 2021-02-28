const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

const getCards = require('../controllers/cardController')


router.get('/', getCards)

module.exports = router;