class Rectangle {
    constructor () {
        document.writeln("Rectangle is created"+"<br>");
        this.color = 'red',
        this.height = 10,
        this.width = 5
    }
}
let MyRectangle =new Rectangle();
let MyRectangle1 =new Rectangle();
let MyRectangle3 =new Rectangle();

//fibonanci series
function  fibonancie() {
    var num1 = 0;
    var num2 = 1;
    var sum;
    document.writeln("0 "+"1")
    for(var i =0;i<=10;i++) {
        sum = num1+num2;
        num1=num2;
        num2=sum;
        document.writeln(num2);
    } 
}
fibonancie();