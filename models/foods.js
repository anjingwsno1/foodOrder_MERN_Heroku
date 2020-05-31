const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Food = new Schema({
  img: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  type: { type: String, required: true },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model("foods", Food);
