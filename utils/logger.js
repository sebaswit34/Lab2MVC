const {STATUS_CODE} = require("../constants/statusCode");
const getInfoLog = (method, url) => {
    console.log(
        `INFO (${new Date(Date.now()).toUTCString()}): ${method} - ${url}`
    );
};

const getErrorLog = (url) => {
    console.warn(
        `ERROR (${new Date(
            Date.now()
        ).toUTCString()}): requested url ${url} doesn't exist.`
    );
};

const getProcessLog = (message) => {
    console.log(
        `PROCESS (${new Date(
            Date.now()
        ).toUTCString()}): logout has been initiated and the application will be closed.`
    );
    process.exit();
};


module.exports = {
    getInfoLog,
    getErrorLog,
    getProcessLog,
};
