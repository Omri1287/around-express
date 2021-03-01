const express = require('express');
const router = express.Router();

const getCards = require('../controllers/cardController')


router.get('/', getCards)

module.exports = router;