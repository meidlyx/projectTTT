// const {Router} = require("express")
// const Database = require("../models/database")
// const bodyParser = require("body-parser")
// const router = Router()

// const urlencodedParser = bodyParser.urlencoded()


// // router.post('/',urlencodedParser,async (req,res) => {
// //   const database = new Database({
// //     name: req.body.name,
// //     device: req.body.device,
// //     model: req.body.model,
// //     phone: req.body.phone,
// //     problem: req.body.problem,
// //     email: req.body.email
// //   })
// //   try {
// //   await database.save()
// //   res.redirect("/")
  
// //  } catch (e) {
// //   console.log(e)
// //  }
// // })

// router.post('/',urlencodedParser,(req,res) => {
//   console.log(req.body)
// })

// module.exports = router;
