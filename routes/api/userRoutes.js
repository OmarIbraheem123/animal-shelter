const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/userController')

// sign up
router.post('/', userCtrl.signUp)

// log in
router.post('/login', userCtrl.Auth, userCtrl.login)

//update user
router.put('/:id', userCtrl.Auth, userCtrl.updateUser)

// delete the user
router.delete('/:id', userCtrl.Auth, userCtrl.deleteUser)

// show the user info
router.get('/:id', userCtrl.showUser)


// index All users
router.get('/', userCtrl.indexUser)


module.exports = router