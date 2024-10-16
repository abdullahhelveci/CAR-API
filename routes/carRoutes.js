const express = require("express");
const {
  getAllCars,
  getCar,
  deleteCar,
  updateCar,
  createCar,
} = require("../controllers");
const ControlId = require("../middleware/ControlId.js");

// router: server.js dosyası dışarısında route tanımı yapmamızı sağlar
const router = express.Router();

// router'a endpointer ve istek geldiğinde çalışacak fonksinları belirtiyoruz.
router.route("/api/v1/cars").get(getAllCars).post(createCar);

router
  .route("/api/v1/cars/:id")
  .get(ControlId, getCar)
  .patch(ControlId, updateCar)
  .delete(ControlId, deleteCar);

// server.js' router'ı export etmek istiyoruz
module.exports = router;
