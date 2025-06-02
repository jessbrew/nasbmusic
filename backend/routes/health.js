const express = require("express");
const router = express.Router();
const logger = require("../logger.js");

router.post("/health", (req, res) => {
    logger.info("Running health check");
    res.send("This is your daily health check");
});
module.exports = router;
