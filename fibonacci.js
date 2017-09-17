
function fibo () {
var c;
var a=-1;
var b=1;
var arr = [];
var count = 0;

do{
c = a + b;
a=b;
b=c;
arr[count] = c;
count ++;
}while(c<31);

return arr;
}


module.exports = fibo;


