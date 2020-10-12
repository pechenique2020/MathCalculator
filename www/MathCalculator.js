var exec = require('cordova/exec');

exports.coolMethod = function (arg1, arg2, success, error) {
    exec(success, error, 'MathCalculator', 'coolMethod', [arg1, arg2]);
};
