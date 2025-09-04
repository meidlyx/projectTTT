const {Router} = require("express")
const Database = require("../models/database")
const bodyParser = require("body-parser")
const router = Router()

// const urlencodedParser = bodyParser.urlencoded()


// // router.post('/',urlencodedParser,async (req,res) => {
// router.post('/', async (req,res) => {
//   const database = new Database({
//     name: req.body.name,
//     device: req.body.device,
//     model: req.body.model,
//     phone: req.body.phone,
//     problem: req.body.problem,
//     email: req.body.email
//   })
//   try {
//   await database.save()
//   res.redirect("/")
  
//  } catch (e) {
//   console.log(e)
//  }
// })

router.post("/", async (req, res) => {
  try {
    const database = new Database(req.body);
    await database.save();
    res.json({ message: "Заказ принят!", data: database });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Ошибка при сохранении заявки" });
  }
});


// // router.post('/',urlencodedParser,(req,res) => {
// //   console.log(req.body)
// // })

// module.exports = router;
