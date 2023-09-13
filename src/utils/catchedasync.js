//catchedAscync is only for async functions 
module.exports = (fn) => {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => {
            next(err)
        })
    }
}