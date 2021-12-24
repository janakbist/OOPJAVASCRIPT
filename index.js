document.writeln("Hello from javascript !");
function greet(name,lastName) {
    document.writeln("<br>"+"Hello" +" "+ name +" " + lastName);
}
greet('janak','Bist');
function SquareNum(num) {
    document.writeln ("<br>"+"square of "+num +" is "+num*num);
}
SquareNum(5);
let person = {
    name: "janak",
    age: 22,
    qualification: "Graduates"
};
document.writeln("<br>"+"Name of person is : " + person.name+"<br>");
console.log(person);
// object literals
document.writeln("OOP Object Literal :"+"<br>")
const circle = {
    radius:1,
    location:{
        x:1,
        y:2
    },
    draw:function() {
        document.writeln("Draw");
    }
};
circle.draw();

//factory function
 function CreateCircle(radius) {
    return{
        radius:radius,
        draw: function () {
            document.writeln("<br>"+" circle drawn from factory function"+"<br>");
        }
    };
}
const circle1 = CreateCircle(1);
circle1.draw();

//constructor
function Circle(radius) {
    this.radius = radius;
    this.Draw = function () {
        document.writeln("<br>"+"Drawing circle from constructor");
    }
} 
const another = new Circle(2);
document.writeln(Circle.name+"<br>"+Circle.length); //output : Circle 1
// Circle.call({},1)

 function multiplication(num) {
     for(var i=1;i<=10;i++) {
        document.writeln("<br>" +"Multiplication of " +num+"*"+i +" = " +i*num);    
     }
 }
 multiplication(10);
 function SquareSeries(num) {
    for(var i=1;i<=num;i++) {
        for(var j =i;j<=i;j++) {
            document.writeln("<br>"+"Square of "+ j+" is "+i*j);
        }
    }
}
SquareSeries(5);
function cubeSeries(num) {
    for(var i=1;i<=num;i++) {
        for(var j =i;j<=i;j++) {
            for(var k=j;k<=j;k++) {
                document.writeln("<br>"+"Cube of "+ j+" is "+i*j*k);
            }
        }
    }
}
cubeSeries(5);
function primeSeries(num) {
    for(var i=2;i<=num;i++) {
        if(i%2 == 1) {
            document.writeln("<br>"+i+"<br>");

        }
    }
}
primeSeries(20);

// value types or primitives are copied by value where as reference types  are copied by reference
//primitives types = number,string,boolean,undefined,null
//reference types = array ,object ,function

let number = 10;
function increase(number) {
    number++;
}
increase(number);
document.writeln("number = "+number+"<br>");

let book1 = {
    title : 'Harry porter',
    author: 'jk rolin',
    year: 1992,
    bookSummary: function(){
        return `${book1.title} was written by ${book1.author} in year ${book1.year}` ;
    }
};
document.writeln(book1.bookSummary());

//constructor
function book(title,author,year)  {
    this.title = title ,
    this.author = author,
    this.year =year
}
 let book2 = new book("economics","Adam smith",1970);
 let book3 = new book("physics","Albert",1970);
document.writeln("<br>"+book2.title);
