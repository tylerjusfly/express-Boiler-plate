const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('hello User 1');
});

module.exports = router;
