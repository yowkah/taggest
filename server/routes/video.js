const router = require("express").Router();
const upload = require("multer")({ dest: "/storage/" });
const Video = require("../models/Video");

router.post("/", upload.single("video"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const newVideo = new Video({
    filename: req.file.name,
    path: req.file.path,
    title: req.body.title,
    description: req.body.description,
    tags: []
  });
  newVideo.save(err => {
    if (err) return res.status(500).send("failed");
    res.send("succes");
  });
});

module.exports = router;
