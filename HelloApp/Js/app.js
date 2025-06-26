const express = require("express"); 
const PORT = process.env.PORT || 3000
const sequelize = require('./utils/database');
const exphbs = require("express-handlebars");
const app = express();
const indexRoutes = require("./routes/index");
const orderRoutes = require("./routes/order");
const errRoutes = require("./routes/404");


const hbs = exphbs.create({
defaultLayout: 'main',
extname:'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine','hbs')
app.set ('views', 'views')


app.use(express.static("styles"))
app.use(express.urlencoded({extended: true}))

app.use('/',indexRoutes);
app.use('/order',orderRoutes);
app.use('/err',errRoutes);

async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT)
    } catch (error) {
        console.log(error)
    }
}

start()