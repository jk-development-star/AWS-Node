const express = require("express");
const { login } = require("../handler.js");

const router = express.Router();

router.post("/login", login);

module.exports =  router
