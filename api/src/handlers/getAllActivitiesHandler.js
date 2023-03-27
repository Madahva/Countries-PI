const {
  getAllActivities,
} = require("../controllers/getAllActivitiesController.js");

async function getAllActivitiesHandler(req, res) {
  try {
    const activities = await getAllActivities();

    res.status(200).send(activities);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { getAllActivitiesHandler };
