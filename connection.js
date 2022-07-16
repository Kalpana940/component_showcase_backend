const mongoose = require("mongoose");

const db_name = "mynewdatabase";
const url = `mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/${db_name}?retryWrites=true&w=majority`;

// it will return promise
mongoose
  .connect(url)
  .then((result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;