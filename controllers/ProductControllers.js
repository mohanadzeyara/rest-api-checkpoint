const Product = require('../models/product')

exports.AddProduct = async (req, res) => {
    try {
        const NewProduct = new Product(req.body)
        NewProduct.Image = `${req.protocol}://${req.get("host")}/${req.file.path}`
        await NewProduct.save()
      
        return res.status(201).send({ msg: 'Product created' })

    } catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}
exports.GetProducts=async(req,res)=>{
try {
    const Products=await Product.find()
    return res.status(200).send(Products)
} catch (error) {
    return res.status(500).send({ msg: error.message })
}
}

exports.DeleteProducts=async(req,res)=>{
    try {
        const {id}=req.params
        await Product.deleteOne({_id:id})

        return res.status(202).send({msg:"Product deleted"})
    } catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}
exports.SendOrder=async(req,res)=>{
    try {
        const {id}=req.params
       
        const product= await Product.findById(id)
           product.Quantity--
           product.save()
        return res.status(202).send({msg:"Order is sent"})
    } catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}