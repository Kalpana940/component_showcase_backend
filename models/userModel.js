const { stringify } = require("nodemon/lib/utils");
const mongoose= require("../connection");

const schema = new mongoose.Schema({
    username:stringify,
    email: String,
    contact: String,
    age:Number,
    password: String,
});

const model = mongoose.model("users", schema); //user is collection=

module.exports=model;