const express = require("express");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/dbConfig");
const port =process.env.PORT ||6969;
const app = express();

connectDB();


const genqRoutes = require("./routes/genqRoutes");


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("pug",require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views" ));
app.use(express.static(path.join(__dirname, "public")))


app.use("/api", genqRoutes);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})