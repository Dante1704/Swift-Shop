class clientError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = 'clientError'
        this.code = code;
    }
}

class connectionError extends Error {
    constructor(message, code = 504) {
        super(message);
        this.name = 'connectionError'
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

class queryError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = 'modelError'
        this.code = code;
    }
}


module.exports = { clientError, modelError, connectionError, queryError };