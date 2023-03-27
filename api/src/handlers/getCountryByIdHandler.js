const {
  getCountryById,
} = require("../controllers/getCountryByIdController.js");

async function getCountryByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const country = await getCountryById(id);

    res.status(200).send(country);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { getCountryByIdHandler };
