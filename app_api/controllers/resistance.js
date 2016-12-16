var mongoose = require('mongoose');
var resistanceTable = mongoose.model('resistanceTable');

var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

var sendJSONres = function(res, content) {
  res.json(content);
};



module.exports.resistanceDataReadAll = function(req, res) {
  console.log('Finding data');
    resistanceTable
      .find()
      .exec(function(err, _x) {
        sendJSONres(res, _x);
      });
};