const express = require('express')
const router = express.Router()
var Cylon = require('cylon');
const arduino = require('../arduino.js')



router.get('/fan1', function (req, res) {
    return arduino
  })