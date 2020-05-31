const Food = require("../models/foods");

getAllFood = async (req, res) => {
  await Food.find({}, (err, food) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!food.length) {
      return res.status(404).json({ success: false, error: `Food not found` });
    }
    return res.status(200).json({ success: true, data: food });
  }).catch(err => console.log(err));
};

module.exports = {
  getAllFood
};
