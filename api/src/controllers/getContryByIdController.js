const { Activity, Country } = require("../db.js");

async function getCountryById(id) {
  const country = await Country.findOne({
    where: { id: id },
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });

  return country;
}

module.exports = { getCountryById };
