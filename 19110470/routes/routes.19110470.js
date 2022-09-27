const express = require('express');
const {friendRequest, listfriend} = require('../controllers/controllers.mygroupcontroller');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/:friendID', friendRequest);
router.get('/', listfriend);
// define the about route

module.exports = router


/// tạo thêm routes