const User = require('../models/user')


exports.Getusers= async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
    }
}

exports.adduser= async (req, res) => {
    try {

        const user = new User(req.body)
        await user.save()
        return res.status(201).send('User Created')
    } catch (error) {
        console.error(error)
    }
}

exports.Update= async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body, { new: true })

        return res.status(202).send(user)

    } catch (error) {
        console.error(error)
    }
}

exports.Deleteuser= async (req, res) => {
    try {
        const { id } = req.params
        const result = await User.findByIdAndDelete(id)

        return res.status(202).send(result)

    } catch (error) {
        console.error(error)
    }
}