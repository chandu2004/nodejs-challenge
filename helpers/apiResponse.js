exports.successResponse = function (res, msg) {
  var data = {
    code: 0,
    msg: msg,
  };
  return res.status(200).json(data);
};

exports.successResponseWithData = function (res, msg, data) {
  var resData = {
    code: 0,
    msg: msg,
    records: data,
  };
  return res.status(200).json(resData);
};

exports.ErrorResponse = function (res, msg) {
  var data = {
    code: 1,
    msg: msg,
  };
  return res.status(500).json(data);
};

exports.notFoundResponse = function (res, msg) {
  var data = {
    code: 2,
    msg: msg,
  };
  return res.status(404).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
  var resData = {
    code: 3,
    msg: msg,
    errors: data,
  };
  return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
  var data = {
    code: 4,
    msg: msg,
  };
  return res.status(401).json(data);
};
