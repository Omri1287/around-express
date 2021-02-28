const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

const {getOneUser, getUsers} = require('../controllers/userController')


router.get('/', getUsers)
  
router.get('/:_id', getOneUser)

module.exports = router;