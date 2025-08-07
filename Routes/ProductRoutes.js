const express = require('express')
const router =  express.Router();
const ProductController=require('../controllers/ProductControllers')
const Middleware=require('../MiddleWares/IsAuth')
const upload=require('../utils/multer')
const IsAdmin=require('../MiddleWares/IsAdmin')

router.get('/',ProductController.GetProducts)

// Private =>
router.patch('/:id',Middleware.Auth,ProductController.SendOrder)

// admin =>
router.post('/',Middleware.Auth,IsAdmin,upload("products").single("file"),ProductController.AddProduct)

router.delete('/:id',Middleware.Auth,IsAdmin,ProductController.DeleteProducts)





module.exports = router;


