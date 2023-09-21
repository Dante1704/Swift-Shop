const { Router } = require("express")
const router = Router();
const controller = require('../controllers')
const middleware = require('../middlewares')


//GETLIST by any entity 
router.get('/:model',
    middleware.modelValidator,
    controller.getList
)

//CREATE an object of any entity
router.post('/:model',
    middleware.modelValidator,
    middleware.createValidator,
    controller.createObject
)

//GETTOTAL by any entity
router.get('/:model/count',
    middleware.modelValidator,
    controller.getTotal
)

//GETBYID by any entity 
router.get('/:model/:id',
    middleware.modelValidator,
    controller.getById
)

//DELETE an object of any entity
router.delete('/:model/:id',
    middleware.modelValidator,
    middleware.deleteValidator,
    controller.deleteObject
)

//UPDATE an object of any entity
router.put('/:model/:id',
    middleware.modelValidator,
    middleware.updateValidator
    // , controller.updateObject
)


module.exports = router;
