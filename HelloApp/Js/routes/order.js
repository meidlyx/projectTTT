const {Router} = require("express");
const bodyParser = require("body-parser")
const Database = require("../models/database")
const router = Router();

const urlencodedParser = bodyParser.urlencoded()


router.post('/',urlencodedParser,async (req,res) => {
  const database = new Database({
    name: req.body.name,
    device: req.body.device,
    model: req.body.model,
    phone: req.body.phone,
    problem: req.body.problem,
    email: req.body.email
  })
  try {
  await database.save()
  res.redirect("/")
  
 } catch (e) {
  console.log(e)
 }
})



router.get("/",(req,res) => {
  res.render('order',{title:"Отправка заявки"})  ;
});

module.exports = router;