const {Router} = require("express")
const Database = require("../models/database")
const bodyParser = require("body-parser")
const router = Router()

router.get("/",(req,res) => {
  res.render('order',{title:"Отправка заявки"})  
});


const jsonParser = bodyParser.json()

router.post('/',jsonParser,async (req,res) => {
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


module.exports = router;