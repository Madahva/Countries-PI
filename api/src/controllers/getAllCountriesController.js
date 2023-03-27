const { Activity, Country } = require("../db.js");

async function getAllCountries() {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });
  return countries;
}

module.exports = { getAllCountries };
