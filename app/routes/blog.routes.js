module.exports = app => {
  const blog = require("../controllers/blog.controller.js");
  const multer = require('multer');

  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {        
        cb(null , Date.now()+'_'+file.originalname);
    }
  });
  const upload = multer({ storage: storage }) 

  var router = require("express").Router();
  
  // Create a new blog
  router.post("/addstudent",upload.single('file'), blog.createstudentinfo);

  // Retrieve all blog
  router.get("/allstudent", blog.findAllstudent);

  app.use("/api/blog", router);
  

};
