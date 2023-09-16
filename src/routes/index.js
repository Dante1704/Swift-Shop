const { Router } = require("express")
const router = Router();
const controller = require('../controllers')
const middleware = require('../middlewares')


//getlist by any entity 
router.get('/:model',
    middleware.modelValidator,
    controller.getList)


//getById by any entity 
router.get('/:model/:id',
    middleware.modelValidator,
    controller.getById)

//create an object of any entity
router.post('/:model',
    middleware.modelValidator,
    middleware.formValidator,
    controller.createObject)

module.exports = router;
