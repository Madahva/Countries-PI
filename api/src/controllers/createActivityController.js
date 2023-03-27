const { Activity, Country } = require("../db.js");

async function createActivity(activity) {
  const createdActivity = await Activity.create({
    name: activity.name,
    difficulty: activity.difficulty,
    duration: activity.duration,
    season: activity.season,
  });

  const countries = await Promise.all(
    activity.countries.map((countryName) =>
      Country.findOne({ where: { name: countryName } })
    )
  );

  await createdActivity.addCountries(countries);

  return createdActivity;
}

module.exports = { createActivity };
