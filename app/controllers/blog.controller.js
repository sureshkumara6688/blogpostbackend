var fs = require('fs');
var path = require('path');
const db = require("../models");
const Blog = db.Blog;


exports.createstudentinfo = (req, res) => {
  console.log(req.body)
  if (!req.body.firstname) {
    res.send({ message: "Content can not be empty!" });
    return;
  }
  const blogs = new Blog({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phonenumber: req.body.phonenumber,
    education: req.body.education,
    information: req.body.information,
    yourimg: req.file.filename,
   
  });
  blogs
    .save(blogs)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the blog."
      });
    });
}
exports.findAllstudent = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  Blog.find({})
    .then(data => {
      const newData = data.map((item, index) => {
        item.yourimg = `http://localhost:6868/images/${item.yourimg}`
        return item;
      })
      res.status(200).send(newData);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving bookname."
      });
    });
};

