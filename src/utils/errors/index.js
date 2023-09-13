class clientError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = 'clientError'
        this.code = code;
    }
}

class modelError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = 'modelError'
        this.code = code;
    }
}

module.exports = { clientError, modelError };