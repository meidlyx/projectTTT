const {Router} = require("express")
const router = Router()

router.get("/",(req,res) => {
  res.render('order',{title:"Отправка заявки"})  
});

router.post('/',(req,res) => {
  console.log(req.body)


  res.redirect("/")
})


module.exports = router; 