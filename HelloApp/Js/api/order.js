const {Router} = require("express")
const Database = require("../models/database")
const bodyParser = require("body-parser")
const router = Router()

const jsonParser = bodyParser.json()
fetch("http://localhost:3000/", {
  method: "POST",
  body: JSON.stringify({
    name: "some-data",
    device: "some-data",
    model: "some-data",
    phone: "some-data",
    problem: "some-data",
    email: "some-data"
  })
});

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