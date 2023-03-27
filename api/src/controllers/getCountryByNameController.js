const { Activity, Country } = require("../db.js");
const { Op } = require("sequelize");

async function getCountryByName(name) {
  const country = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });
  return country;
}

module.exports = { getCountryByName };
