const express = require('express');
const router = express.Router();
const UserController = require('../controllers/Usercontrollers');

// CRUD
router.get('/', UserController.Getusers);
router.post('/', UserController.adduser);
router.put('/:id', UserController.Update);
router.delete('/:id', UserController.Deleteuser);

module.exports = router;
