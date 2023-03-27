const { Country } = require("../db.js");

async function getAllCountries() {
  const countries = await Country.findAll();
  return countries;
}

module.exports = { getAllCountries };
