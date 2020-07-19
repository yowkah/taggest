const router = require('express').Router();
const static = require('express').static;
const upload = require('multer')({ dest: '/storage/' });
const Video = require('../models/Video');

router.post('/', upload.single('video'), (req, res) => {
  console.log(req.file);
  console.log(req.body);

  const newVideo = new Video({
    filename: req.file.filename,
    path: req.file.path,
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags.split(','),
  });
  newVideo.save((err) => {
    if (err) return res.status(500).send('failed');
    res.send('succes');
  });
});

// https asaslkdjlaskd.com/videos/?contains=russian,dashcam,iets
router.get('/', (req, res) => {
  const { title = '', contains = '', excludes = '' } = req.query;

  const searchParams = {
    tags: {
      $nin: excludes.split(','),
    },
  };

  if (title) searchParams.title = new RegExp(`.*${title}.*`);
  if (contains) searchParams.tags.$all = contains.split(',');

  Video.find(searchParams, (err, videos) => {
    if (err) return res.status(500).send('failed');
    res.json(videos);
  });
});

router.get('/tags', (req, res) => {
  Video.find().distinct('tags', (err, tags) => {
    if (err) return res.status(500).send('failed');
    res.json(tags);
  });
});

router.get('/:filename', static('/storage/'));

module.exports = router;
