const express = require("express");
const router = express.Router();
const Company = require('../models/Company');


router.post("/delete", async (req, res) => {
  try {
    await Company.remove({
      _id: req.body._id
    });
    res.json({ message: true });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});



router.post("/getCompanyList", async (req, res) => {
  try {
    const _id = req.body._id;
    const company = await Company.find({ writer: _id }, null, {
      sort: { createdAt: -1 }
    });
    res.json({ list: company });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/detail", async (req, res) => {
  try {
    const _id = req.body._id;
    const company = await Company.find({ _id });
    res.json({ company });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

module.exports = router;