"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.send("respond with a resource");
});
router.post('/', (req, res) => {
    res.status(200).send({
        message: 'POST request successfulll!!!!'
    });
});
exports.default = router;
//# sourceMappingURL=getValues.js.map