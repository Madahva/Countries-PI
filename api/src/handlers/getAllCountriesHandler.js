const {
  getAllCountries,
} = require("../controllers/getAllCountriesController.js");

async function getAllCountriesHandler(req, res) {
  try {
    const allCountries = await getAllCountries();
    res.status(200).send(allCountries);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getAllCountriesHandler,
};
