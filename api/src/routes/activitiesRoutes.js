const { Router } = require("express");
const {
  createActivityHandler,
} = require("../handlers/createActivityHandler.js");
const {
  getAllActivitiesHandler,
} = require("../handlers/getAllActivitiesHandler.js");

const activityRouter = Router();

activityRouter.post("/", createActivityHandler);
activityRouter.get("/", getAllActivitiesHandler);

module.exports = activityRouter;
