var exec = require('cordova/exec');

module.exports.add(arg0,success,error)
{
    exec(success, error, 'MathCalculator', 'add', [arg0]);
}

module.exports.substract(arg0,success,error)
{
    exec(success, error, 'MathCalculator', 'substract', [arg0]);
}