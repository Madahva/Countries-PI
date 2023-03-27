const { Activity, Country } = require("../db.js");

async function getAllActivities() {
  const activities = await Activity.findAll({
    include: {
      model: Country,
      through: {
        attributes: [],
      },
    },
  });

  return activities;
}

module.exports = { getAllActivities };
