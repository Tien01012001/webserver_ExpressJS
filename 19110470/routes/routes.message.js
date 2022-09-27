const express = require('express');
const {message,mygroupRequest} = require('../controllers/controllers.mygroupcontroller');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/:myID', mygroupRequest);
router.get('/', message);
// define the about route

module.exports = router


/// tạo thêm routes