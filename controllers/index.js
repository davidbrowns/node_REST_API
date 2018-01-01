const express = require('express')
const router = express.Router()

const authCtrl = require('./authCtrl')
const postsCtrl = require('./postsCtrl')
const usersCtrl = require('./usersCtrl')

// initial meta object
router.use(function (req, res, next) {
  req.meta = {
    user: {
      id: false,
      role: 'anonymous',
      isOwner: false
    }
  }
  next()
})

// auth middleware
router.use(function (req, res, next) {
  // check token
  next()
})

router.get('/', function (req, res) {
  res.json({ success: true, data: 'hello root' })
})

router.use('/auth', authCtrl)
router.use('/posts', postsCtrl)
router.use('/users', usersCtrl)

module.exports = router
