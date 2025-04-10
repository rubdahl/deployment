var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:number1/:number2', function(req, res, next) {
  var number1 = parseInt(req.params.number1);
  var number2 = parseInt(req.params.number2);
  if (isNaN(number1) || isNaN(number2)) {
    console.error({message: "Please pass a number"})
  }
  var sum = number1 + number2
  
  res.status(200).json(sum)
});

module.exports = router;
