const express = require('express')
const router =  express.Router();
const userController=require('../controllers/Usercontrollers')

router.get('/',userController.Getusers)

router.post('/',userController.adduser)

router.put('/:id',userController.Update)

router.delete('/:id',userController.Deleteuser)

module.exports = router;