const { Router } = require("express");
const bodyParser = require("body-parser");
const Database = require("../models/database");
const router = Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/", urlencodedParser, async (req, res) => {
  try {
    const database = new Database({
      name: req.body.name,
      device: req.body.device,
      model: req.body.model,
      phone: req.body.phone,
      problem: req.body.problem,
      email: req.body.email,
    });

    await database.save();

    res.json({ success: true, message: "Заявка сохранена" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Ошибка при сохранении" });
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await Database.find();
    res.json(items);
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Ошибка при получении" });
  }
});

module.exports = router;
