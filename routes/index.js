var express = require('express');
const { Funcs } = require('../helpers/Funcs.js');
var router = express.Router();
var path = require('path');
const CircularJSON = require('circular-json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/api-listening", (req, res, next) => {
  var params = req.body;
  if (!params) return res.send({
    status: false,
    err: "Invalid",
  });
  params = JSON.stringify(params).toString();

  const textData = Funcs.fun_makeTextAppendInFile(params);
  Funcs.fun_appendTextInFile(textData, './public/files/api-listening.txt');

  const reqData = Funcs.fun_makeTextAppendInFile(CircularJSON.stringify(req) + '\n' + params);
  Funcs.fun_appendTextInFile(reqData, './public/files/api-listening-req.txt');

  res.status(201).send({
    success: true,
    data: params,
  });
});

router.get("/api-listening", (req, res, next) => {
  const logs = Funcs.fun_readFileText();
  if (!logs)
    return res.status(500).send({
      success: false,
      message: 'File not found!',
    });

  var fileName = 'public/files/api-listening.txt';
  res.sendFile(path.resolve(fileName));
})
module.exports = router;
