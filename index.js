const server = require("./src/server")

const config = require('./config')

server.listen(config.PORT, () => {
    console.log("server listening on port:", config.PORT)
})
