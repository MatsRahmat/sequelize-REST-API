const router = require('express').Router()
const LanguageController = require('../controllers/laguangeController')
const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')
// const authorization = require('../middlewares/authorization')


// router.get('/', (req, res) => {
//     res.send('ada woy')
// })

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use(authentication)

router.get('/contry', LanguageController.readContry)
router.post('/contry', LanguageController.addContry)
router.get('/contrydetails', LanguageController.contryDetails)

module.exports = router