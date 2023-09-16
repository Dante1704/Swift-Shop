const server = require("./src/server")

server.listen(process.env.PORT, () => {
    console.log("server listening on port:", process.env.PORT)
})
