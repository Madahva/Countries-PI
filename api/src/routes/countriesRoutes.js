const { Router } = require("express");
const {
  getAllCountriesHandler,
} = require("../handlers/getAllCountriesHandler.js");
const {
  getCountryByIdHandler,
} = require("../handlers/getCountryByIdHandler.js");
const {
  getCountryByNameHandler,
} = require("../handlers/getCountryByNameHandler.js");

const countryRouter = Router();

countryRouter.get("/", getAllCountriesHandler);
countryRouter.get("/name", getCountryByNameHandler);
countryRouter.get("/:id", getCountryByIdHandler);

module.exports = countryRouter;
