var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/index', employeeController.index);
router.post('/add', employeeController.addEmp);
router.get('/list', employeeController.list);
router.get('/update/:id', employeeController.updateView);
router.post('/update', employeeController.update);
router.get('/delete/:id', employeeController.delete);

module.exports = router;