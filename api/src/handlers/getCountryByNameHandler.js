const {
  getCountryByName,
} = require("../controllers/getCountryByNameController.js");

async function getCountryByNameHandler(req, res) {
  const { name } = req.query;
  try {
    const country = await getCountryByName(name);
    res.status(200).send(country);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { getCountryByNameHandler };
