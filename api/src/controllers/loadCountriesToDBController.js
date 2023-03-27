const axios = require("axios");
const { Country } = require("../db.js");

const loadCountriesToDB = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3/all");
    const countries = response.data;

    await Country.bulkCreate(
      countries.map((country) => ({
        id: country.cca3,
        name: country.name.common,
        flagImage: country.flags[0],
        continent: country.region,
        capital: country.capital?.[0],
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      }))
    );

    console.log("Countries saved to database");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  loadCountriesToDB,
};
