const { Router } = require("express");
const {
  createActivityHandler,
} = require("../handlers/createActivityHandler.js");

const activityRouter = Router();

activityRouter.post("/", createActivityHandler);

module.exports = activityRouter;
