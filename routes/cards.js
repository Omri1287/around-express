const express = require('express');
const router = express.Router();

const getCards = require('../controllers/cardController')
const deleteCard = require('../controllers/cardController')
const createCard = require('../controllers/cardController')
const likeCard = require('../controllers/cardController')
const dislikeCard = require('../controllers/cardController')



router.get('/', getCards)
router.post('/', createCard)
router.delete('/:cardId', deleteCard)
router.put('/:cardId/likes', likeCard)
router.delete('/:cardId/likes', dislikeCard)

module.exports = router;
//