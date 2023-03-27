const {
  createActivity,
} = require("../controllers/createActivityController.js");

async function createActivityHandler(req, res) {
  const activity = req.body;

  try {
    const createdActivity = await createActivity(activity);

    res.status(202).send(createdActivity);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { createActivityHandler };
