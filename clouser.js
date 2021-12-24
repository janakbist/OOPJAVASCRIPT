// A clouser is a function having access to parent scope.but,preserve data from outside(it means parent function cannot acess inner function property)
function clouserExamle(a,b)  {
    var sum = a+b;
    document.writeln("<br>"+sum) ;
    function innerFun() {
        document.writeln("<br>"+"innerfunction Acess " + sum);
    }
    innerFun();
}
clouserExamle(2,4);

// Promises are used to handle asynchronous operations in JavaScript.
//  They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code
// A Promise has four states: 
//fulfilled: Action related to the promise succeeded
//rejected: Action related to the promise failed
//pending: Promise is still pending i.e. not fulfilled or rejected yet
//settled: Promise has fulfilled or rejected
//syntax :  var promise = new Promise(function(resolve, reject){do something });
// calling : variable.then((function () {})).catch((function() {}))

let a = new Promise((resolve,reject) => { var x= 2+1; if(x==3)
{
    resolve('success')
}
else{
    reject('failed')
}
})
a.then((msg) => {document.writeln("<br>"+"This is in then "+msg)}).catch((msg) => {"<br>+"+"This is in catch "+msg})