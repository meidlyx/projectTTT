const {Router} = require("express");
const bodyParser = require("body-parser");
const router = Router();

router.get("/",(req,res) => {
  res.render('order',{title:"Отправка заявки"})  ;
});

module.exports = router;