const { Router } = require("express")
const router = Router();
const controller = require('../controllers')

//getlist by any entity 
router.get('/:model', controller.getList)


//getById by any entity 
router.get('/:model/:id', controller.getById)

//create an object of any entity
router.post('/:model/create', controller.createObject)

module.exports = router;