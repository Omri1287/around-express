const express = require('express');
const router = express.Router();

const {getOneUser, getUsers, createUser, updateUser, updateAvatar} = require('../controllers/userController')


router.get('/', getUsers)
router.get('/:_id', getOneUser)
router.post('/:_id', createUser)
router.patch('/:_id', updateUser)
router.patch('/:_id/avatar', updateAvatar)

module.exports = router;
//