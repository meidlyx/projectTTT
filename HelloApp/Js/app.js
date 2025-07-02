const express = require("express"); 
const PORT = process.env.PORT || 3000
const mongoose = require("mongoose")
const exphbs = require("express-handlebars");
const indexRoutes = require("./routes/index");
const orderRoutes = require("./routes/order");
const errRoutes = require("./routes/404");
const app = express();


const hbs = exphbs.create({
defaultLayout: 'main',
extname:'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine','hbs')
app.set ('views', 'views')


app.use(express.static("styles"))


app.use('/',indexRoutes);
app.use('/order',orderRoutes);
app.use('/err',errRoutes);

async function start() {
    try {
        const url = "mongodb+srv://user2000:test1010@cluster0.zk4gxig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        await mongoose.connect(url)
        app.listen(PORT)
    
    } catch (e) {
        console.log(e)
    }
}

start()






