function isNumber(string) {
    var regex = /^[\-\+]?[0-9]*\.?([0-9]+)?$/;
    return regex.test(string);
}

function isNumberWithComma(string) {
    var regex = /^[\-\+]?[0-9]*[.,]?([0-9]+)?$/;
    return regex.test(string);
}

/* Define Polyfills if needed  */
if (!Number.isInteger) {
    Number.isInteger = function(value) {
        return typeof value === 'number'
            && isFinite(value)
            && Math.floor(value) === value;
    };
}

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

module.exports = {
  isNumber: isNumber,
  isNumberWithComma: isNumberWithComma
}
