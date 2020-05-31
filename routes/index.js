const express = require("express");

const CakeCtrl = require("../controllers/cake_controller.js");
const MovieCtrl = require("../controllers/movie_controller.js");
const FoodCtrl = require("../controllers/food_controller.js");

const router = express.Router();

router.get("/cakes", CakeCtrl.getCakes);

router.post("/movie", MovieCtrl.createMovie);
router.put("/movie/:id", MovieCtrl.updateMovie);
router.delete("/movie/:id", MovieCtrl.deleteMovie);
router.get("/movie/:id", MovieCtrl.getMovieById);
router.get("/movies", MovieCtrl.getMovies);
router.get("/allFood", FoodCtrl.getAllFood);
module.exports = router;
