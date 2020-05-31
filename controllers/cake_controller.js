const Cake = require("../models/cakes");

getCakes = async (req, res) => {
  await Cake.find({}, (err, cakes) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!cakes.length) {
      return res.status(404).json({ success: false, error: `cakes not found` });
    }
    return res.status(200).json({ success: true, data: cakes });
  }).catch(err => console.log(err));
};

module.exports = {
  getCakes
};
