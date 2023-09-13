const { Router } = require("express")
const router = Router();
const controller = require('../controllers')

//getlist by any entity
router.get('/:model', controller.getList)

module.exports = router;