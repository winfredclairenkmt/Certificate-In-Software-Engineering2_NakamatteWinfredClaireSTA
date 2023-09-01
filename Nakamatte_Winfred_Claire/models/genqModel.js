const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim:true
    },
    lname:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    town:{
        type: String,
        required: true
    },
    zip:{
        type: Number,
        required: true
    },
    tel1:{
        type: String,
        required: true,
        unique: true
    },
    tel2:{
        type: String,
        required: true,
        unique: true

    },
    email:{
        type: String
    }


});

module.exports = mongoose.model("Client", ClientSchema);