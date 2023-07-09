var a = false && true && false;  // returns false, evaluation stops at first value
var b = true && false && true;   // returns false, evaluation stops at second value
var c = true && true && false;   // returns false, evaluation stops at last value

var d = true || true || false;   // returns true, evaluation stops at first value
var e = false || true || false;  // returns true, evaluation stops at second value
var f = false || false || true;  // returns true, evaluation stops at last value