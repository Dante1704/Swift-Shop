const { Router } = require("express")
const router = Router();
const controller = require('../controllers')

//getlist by any entity 
router.get('/:model', controller.getList)


//getById by any entity 
router.get('/:model/:id', controller.getById)

module.exports = router;