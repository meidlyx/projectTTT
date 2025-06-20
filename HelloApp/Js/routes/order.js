const {Router} = require("express")
const router = Router()

router.get("/order",(req,res) => {
  res.render('order',{title:"Отправка заявки"})  
});

router.post('/order',(req,res) => {
  console.log(req.body)
})

module.exports = router;