const { Router } = require("express");
const countriesRoutes = require("./countriesRoutes.js");
// const activitiesRoutes = require("./activitiesRoutes.js");

const router = Router();

router.use("/countries", countriesRoutes);
// router.use("/activities", activitiesRoutes);

module.exports = router;
