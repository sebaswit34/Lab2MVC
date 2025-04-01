const express = require("express");
const path = require("path");
const logger = require("../utils/logger");
const router = express.Router();

router.get("/", (res, req) => {
   logger.getProcessLog("logout has been initiated and the application will be closed.");
   proccess.exit();
});
module.exports = router;
