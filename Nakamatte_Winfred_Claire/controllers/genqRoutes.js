const express = require("express");
const router = express.Router();
const Client = require("../models/genqModel");

router.get("/genq", (req, res) => {
    res.render("genq.pug");
});

router.post("/reggenq", async(req, res) => {
            try{
                const person = new Client(req.body);
                console.log(req.body);
                await person.save();
                res.status(200).send({ message: "Client registered successfully" });
                res.redirect("/api/genq");
            }
            catch(error){
                res.status(400).send({message: "Sorry could not register client"});
                console.log(error);
            }
})


module.exports= router;