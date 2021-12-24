function sum(a,b) {
    document.writeln (a+b+"<br>");
}
sum(2,3);
let sum1 = (a,b) => document.writeln (a+b+"<br>");
sum1(3,5);

function  isPositive(num) {
    if(num>=0) {
        document.writeln(num+" Is Positive Number"+"<br>");
    }
}
isPositive(10);
let isPositive2 = (num) => {if(num>=0){document.writeln(num+"Is a PostiveNumber"+"<br>");}}
isPositive2(1);

document.addEventListener('click',function () {
    document.writeln('click');
})
document.addEventListener('click',(a,b) => document.writeln (a+b+"<br>"))

// immedaitely involked function expression IIFE or anonymous or self calling function
//syntax : !function() {}(); || (function(){})(); || +function() {}(); || -function() {}();
-function (a,b) {
    document.writeln(a+b);
}(2,3);

