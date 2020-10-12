var exec = require('cordova/exec');

module.exports.add(arg0,success,error)
{
    console.log("arg0",arg0);
    exec(success, error, 'MathCalculator', 'add', [111,11]);
}

module.exports.substract(arg0,success,error)
{
    console.log("arg0",arg0);
    exec(success, error, 'MathCalculator', 'substract', [111,11]);
}