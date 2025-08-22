const express = require("express");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const path = require("path");

const indexRoutes = require("./routes/index");
const orderRoutes = require("./routes/order");
const errRoutes = require("./routes/404");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/styles", express.static(path.join(__dirname, "styles")));

app.use("/api", indexRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/err", errRoutes);

async function start() {
    try {
        const url =
            "mongodb+srv://user2000:test1010@cluster0.1rwbm1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(url);

        app.listen(PORT, () =>
            console.log(`http://localhost:${PORT}`)
        );
    } catch (e) {
        
    }
}

start();
