const { Router } = require("express");
const {
  getAllCountriesHandler,
} = require("../handlers/getAllCountriesHandler.js");

const countryRouter = Router();

countryRouter.get("/", getAllCountriesHandler);

module.exports = countryRouter;
