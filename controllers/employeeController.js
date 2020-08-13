
const express = require('express');
const router = express.Router();

const users = require('../data');
const loggedUser = require('../user');

router.get('/', (req, res) => {
  res.render('employee/index');
});



// router.get('/AllEmployeeList', (req, res) => {
//   res.render('admin/allEmployee', { users });
// });

module.exports = router;
