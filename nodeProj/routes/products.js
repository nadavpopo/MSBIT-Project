const express = require('express');
const router = express.Router();
const request = require('request');
const {data} = require('../service/apiService');

router.get('/', (req, res) =>
{
  if(data.length == 0)
  {
    res.json('error');
  }
  res.json(data);
})

module.exports = router;