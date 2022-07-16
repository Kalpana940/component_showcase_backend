const express = require("express");
const router = express.Router();
const Model = require("../models/userModel");

router.post("/add", (req, res) => {
  const formdata = req.body;
  console.log(req.body);
  // res.send("request processed in user router");

  // Create Operation
  new Model(formdata)
    .save()
    .then((result) => {
      console.log("data saved!!");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

// to fetch all the users data
router.get("/getall", (req, res) => {
  Model.find({})
    .then((result) => {
      console.log("user Data fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.get("/getbyid/:userid", (req, res) => {
  console.log(req.params.userid);
  res.send("Response from getbyid");
});

// for login page
router.post( '/authenticate', (req, res) => {

  const formdata = req.body;

  Model.findOne({email : formdata.email, password : formdata.password})
  .then((userdata) => {
    if(userdata){
      console.log('login success');
      res.status(200).json(userdata);
    }else{
      console.log('login failed');
      res.status(300).json({loginStatus : false})
    }
  }).catch((err) => {
    console.error(err);
    res.json(err);
  });
})

module.exports = router;