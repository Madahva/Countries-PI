const { Country } = require("../db.js");

async function getAllCountries() {
  const countries = await Country.findAll();
  console.log(countries)
}

module.exports = { getAllCountries }
