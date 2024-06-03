greet ("name") // created host who call greet function first 
function greet(name){
    console.log("Hello " + name);
}
console.log("in function")

var count = 0;
function counter(){
    // count = count + 1;
    count += 1;
    console.log("data");
}

//find area of Rectangle
function findArea(){
    var width = 5;
    var height = 10;
    // Calculate the area of Rectangle
    var area = width * height;
    // Output the results
    console.log(`Area of rectangle:${area}`);
}
 

 // Convert Celsius to Fahrenheit
 var C = 50;
 function CtoF(){
    var F = (C*9/5)+32;
    console.log("Fahrenheit : "+ F);
 }

 //convert fahrenheit to celsius
 var F = 50;
 function FtoC(){
    var C = (F-32)*5/9;
    console.log("Celsius: "+ C);
 }